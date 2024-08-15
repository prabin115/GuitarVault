import Razorpay from "razorpay";

const keyId = process.env.KEY_ID;
const keySecret = process.env.KEY_SECRET;

const handler = async (req, res) => {
    // console.log("creating order")
    const razorpay = new Razorpay({
        key_id: keyId,
        key_secret: keySecret
    });

    const {amount} = req.body;
    const options = {
        amount : amount * 100,
        currency : "INR",
        receipt : "receipt#1"
    };
    const order = await razorpay.orders.create(options);
    // console.log(order);
    res.status(200).json(order);
}

export default handler;