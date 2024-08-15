import { CartContext } from '@/contexts/CartContext'
import { PaymentContext } from '@/contexts/PaymentContext';
import Link from 'next/link';
import React, { useContext } from 'react'

// This is a readymade Cart Component. 
// Basic features like increment/decrement, total, subtotal and checkout have been implemented by yours truly. 

const Cart = () => {

    const { cart, incrementQuantity, decrementQuantity, removeItem, subtotal } = useContext(CartContext);
    const { paymentStart } = useContext(PaymentContext);

    function handleCheckout(total){
        paymentStart(total);
    }

    // If our cart is empty then simply show a message and a button to direct to the product listing page
    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h1>
                    <Link href="/products">
                        <button className="px-6 py-2 text-lg font-semibold text-white bg-gray-900 rounded-md transition hover:bg-gray-800">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

  return (
    <>
    <div className='min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
            </div>
            <div className='mx-auto mt-8 max-w-2xl md:mt-12'>
                <div className='bg-white shadow'>
                    <div className='px-4 py-6 sm:px-8 sm:py-10'>
                        
                        {/* Here we are mapping through our cart and displaying all the items  */}

                        <ul>
                            {cart.map((item, index)=>(
                                <li key={index} className='p-3'>
                                    <div className='flex justify-center items-center'>
                                        <div className="shrink-0">
                                            <img className="h-24 w-24 max-w-full rounded-lg object-contain" src={item.image} alt="" />
                                        </div>
                                        <div className="relative flex flex-1 flex-col justify-between">
                                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                <div className="pr-8 sm:pr-5">
                                                    <p className="text-base font-semibold text-gray-900">
                                                        {item.brand} {item.name}
                                                    </p>
                                                    <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                                        {item.type}
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                                    ₹ {item.price}
                                                </p>

                                                <div className="sm:order-1">
                                                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                        <button onClick={() => decrementQuantity(item.id)} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                                            -
                                                        </button>
                                                        <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                                            {item.quantity}
                                                        </div>
                                                        <button onClick={() => incrementQuantity(item.id)} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                                            +
                                                        </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mt-5'>
                                                <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                    <button onClick={() => removeItem(item.id)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                    <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* calculation */}
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-400">Subtotal</p>
                                <p className="text-lg font-semibold text-gray-900">₹{subtotal}</p>
                            </div>
                        </div>                        

                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">INR</span> {subtotal}</p>
                        </div>


                        {/* checkout button */}
                        <div className="mt-6 text-center">
                            <button onClick={()=>handleCheckout(subtotal)} type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                            Checkout
                                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart