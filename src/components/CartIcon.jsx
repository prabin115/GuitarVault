import { CartContext } from '@/contexts/CartContext';
import { faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useContext } from 'react'

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    return (
        <Link href="/cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        {
            cart === null || cart.length === 0 ? 
            <FontAwesomeIcon icon={faCartShopping} /> : 
            <FontAwesomeIcon icon={faCartPlus} />
        }
        </Link>
    )
}

export default CartIcon