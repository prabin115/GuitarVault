import { CartContext } from '@/contexts/CartContext';
import { ProductsContext } from '@/contexts/ProductContext';
import React, { useContext, useEffect, useState } from 'react'

// This is the Product Details page. 
// When you click on any of the product from the listing this is where users will be directed. 
// They can read more details regarding the product and can also Add to cart!

const ProductPage = () => {

  const { selectedProduct } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  if (!selectedProduct) return <div>Loading...</div>;

  return (
    <>
      <div className="flex justify-evenly items-center bg-white pt-5">
        <div className="text-center">
          <img
            className="object-contain w-96 h-96 mb-8"
            src={selectedProduct.image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center mr-10">
          <h1 className="mb-4 font-semibold text-3xl">₹{selectedProduct.price}</h1>
          <button
            onClick={()=> addToCart(selectedProduct)}
            type="button"
            className="focus:outline-none h-10 w-40 text-white bg-black hover:bg-white hover:text-black hover:border-black hover:border-2 rounded-full font-medium text-sm transition duration-300 ease-in-out active:bg-gray-700 active:text-white active:border-gray-700 mb-3"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className='w-1/2 mx-auto'>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"/>
      </div>

      <div className="text-center pt-5">
        <h1 className="text-4xl mt-5">{selectedProduct.name}</h1>
        <h1 className="text-2xl pb-10">{selectedProduct.brand}</h1>
        <p className="w-1/2 mx-auto">{selectedProduct.description}</p>
      </div>

      <div className=" pb-5">
        <h1 className="text-center text-4xl py-10">Highlights</h1>
        <div className="w-1/2 mx-auto">
          <ul className="list-disc text-left">
            {selectedProduct.highlights.map((highlight, index)=>(
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductPage