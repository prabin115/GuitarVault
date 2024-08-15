import ProductCard from '@/components/ProductCard';
import { ProductsContext } from '@/contexts/ProductContext';
import React, { useContext } from 'react'

// This is the Root Product listing page where we display the entire product fetched from our local JSON file
// No Filtering of any type is done here.

const productIndex = () => {

    // products is an array which contains all the fetched product from our local JSON file.
    const {products} = useContext(ProductsContext);
    return (
      <>
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-1/2 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {
            products.map(product => (
              <ProductCard key={product.id} product={product}/>
            ))
          }
          </div>
        </div>
      </>
  );
}

export default productIndex