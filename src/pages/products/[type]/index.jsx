import ProductCard from '@/components/ProductCard';
import { ProductsContext } from '@/contexts/ProductContext';
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

// This is our product listing page. Our Products are being fetched from a local JSON file in Product Context
// and are further filtered by category type in the useEffect below.
// The filtered products are rendered using a Product Card component

const ProductType = () => {
    
    const router = useRouter();
    const {type} = router.query;

    const {setProducts} = useContext(ProductsContext);
    const {filteredProducts, setFilteredProducts} = useContext(ProductsContext);

    // This useEffect fetches the product from API and then saves it on our product state.
    // the product is then filtered by 'type' e.g., 'electric' and saved to filteredProducts which contains only 'electric guitars'
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('/products.json');
            if(!response.ok){
                console.log("Could not fetch data");
            }
            const data = await response.json();
            setProducts(data);
            if(type){
              const filteredData = data.filter(product => product.type === type);
              setFilteredProducts(filteredData);
            } else {
              setFilteredProducts(data);
            }
        }
        if(type)
            fetchData();
    }, [type, setProducts, setFilteredProducts])

    return (
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-1/2 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Our FilteredProduct is being rendered through Product Card component */}
          {
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product}/>
            ))
          }
          </div>
        </div>
    )
}

export default ProductType