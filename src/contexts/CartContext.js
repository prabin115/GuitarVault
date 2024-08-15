import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(()=>{
        setSubtotal(cart.reduce((sum, item) =>
            sum + item.price * item.quantity, 0))
    }, [cart])

    function addToCart(product){
        setCart((prev) => {
            const existingCartItem = prev.findIndex(item => item.id === product.id);
            if(existingCartItem >= 0){
                toast.info("Item already added to cart")
                return prev;
            } else {
                toast.success("Item added to cart")
                return [...prev, {...product, quantity : 1}];
            }
        })
    }

    const removeItem = (productId) => {
        setCart((prev) => {
            return prev.filter(item => item.id != productId)
        })
        toast.info("Item removed from cart")
    }

    const decrementQuantity = (productId) => {
        setCart((prev) => {
            return prev.map(item => {
                if(item.id === productId){
                    if(item.quantity > 1){
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return null;
                    }
                }
                return item;
            }).filter(item => item !== null);
        });
        console.log("-")
    }

    const incrementQuantity = (productId) => {
        setCart((prev)=>{
            return prev.map(item => item.id === productId ? {...item, quantity: item.quantity + 1} : item)
        })
        console.log("+")
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart, subtotal}}>
            {children}
        </CartContext.Provider>
    )
}