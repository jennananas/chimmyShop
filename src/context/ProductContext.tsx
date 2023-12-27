import React, { createContext, useContext, ReactNode } from 'react';

interface Product {
    id: string;
    title: string;
    description?: string;
    price: number;
    category: string;
    image: string;
}

interface ProductContextProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [products, setProducts] = React.useState<Product[]>([]);



    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
