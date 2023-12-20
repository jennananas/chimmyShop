import React, { createContext, useContext, ReactNode } from 'react';

interface Product {
    productId: string;
    productName: string;
    productDescription?: string;
    productPrice: number;
    productThumbnail: string;

}

interface ProductContextProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const dummyProducts = [{
        productId: "1",
        productName: "Dummy 1",
        productThumbnail: "src/assets/images/cover1.jpg",
        productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim est, sed pulvinar est vulputate quis. In iaculis aliquam enim id eleifend. Duis viverra mi sed leo cursus, quis lobortis felis luctus. Curabitur elementum neque nisi, et eleifend erat luctus sit amet. Ut tincidunt eleifend magna.',
        productPrice: 39.99
    }, {
        productId: "2",
        productName: "Dummy 2",
        productThumbnail: "src/assets/images/product2.jpg",
        productPrice: 39.99
    },
    {
        productId: "3",
        productName: "Dummy 1",
        productThumbnail: "src/assets/images/product1.jpg",
        productDescription: 'dummy text',
        productPrice: 39.99
    }, {
        productId: "4",
        productName: "Dummy 1",
        productThumbnail: "src/assets/images/cover3.jpg",
        productDescription: 'dummy text',
        productPrice: 39.99
    }, {
        productId: "5",
        productName: "Dummy 1",
        productThumbnail: "src/assets/images/cover4.jpg",
        productDescription: 'dummy text',
        productPrice: 39.99
    }]
    const [products, setProducts] = React.useState<Product[]>(dummyProducts);

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
