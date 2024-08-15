import { createContext, useContext } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

export const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {

    const { clearCart } = useContext(CartContext);

    const keyId = process.env.KEY_ID;

    const paymentStart = async (amount) => {
        // console.log("Payment Started");
        try {
            const response = await fetch("/api/payment/create-order",{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({amount})
            })
            if(!response.ok){
                console.log("Network response was not ok");
                toast.error("Network error! Please try again.");
                return;
            }
            const orderData = await response.json();
            // console.log(orderData);
            
            const options = {
                key: keyId, 
                amount: orderData.amount, 
                currency: orderData.currency,
                name: "Guitar Vault", 
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: orderData.id, 
                prefill: {
                    "name": "", 
                    "email": "",
                    "contact": "" 
                },
                theme: {
                    "color": "#3399cc"
                },
                handler: function(response){
                    // console.log(response);
                    toast.success("Payment successful! Thank you for your purchase.");
                    clearCart();
                },
                modal: {
                    ondismiss: function(){
                        toast.info("Payment was not completed.")
                    }
                }
            }
            const rzp = new Razorpay(options);
            rzp.open();
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <PaymentContext.Provider value={{ paymentStart }}>
            {children}
        </PaymentContext.Provider>
    )
}