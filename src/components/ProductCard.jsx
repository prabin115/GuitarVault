import { ProductsContext } from '@/contexts/ProductContext';
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const ProductCard = ({product}) => {
    const router = useRouter();
    const { setSelectedProduct } = useContext(ProductsContext);

    const handleClick = () => {
        setSelectedProduct(product);
        router.push(`/products/${product.type}/${product.id}`);
    }
  return (
    <div onClick={handleClick} className="flex cursor-pointer rounded-sm">
        <div className="w-60 bg-white items-center overflow-hidden shadow-lg">
            <div className='flex justify-center mt-5'>
                <img
                    className="h-64 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
                    src={product.image}
                    alt="Product"
                    />
            </div>
            <div className="px-6 py-4">
                <div>
                    <h5 className="font text-gray-700 text-md">{product.brand}</h5>
                    <p className="font-bold text-gray-900 text-md mb-2">{product.title}</p>
                    <p className="font-bold text-gray-600 text-sm">₹{product.price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard