import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json'); 
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data || []); 
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setProducts([]);
            }
        };
        fetchProducts();
    }, []);
    return(
        <ProductsContext.Provider value={{products, setProducts, selectedProduct, setSelectedProduct, filteredProducts, setFilteredProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}