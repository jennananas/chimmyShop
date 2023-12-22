import React, { createContext, useContext, ReactNode } from 'react';
import Product from '../components/Product/ProductInterface';

interface CartItem {
    product: Product;
    quantity: number
}

interface CartContextProps {
    itemCount: number;
    setItemCount: React.Dispatch<React.SetStateAction<number>>;
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [itemCount, setItemCount] = React.useState<number>(0);
    const [cartItems, setCartItems] = React.useState<CartItem[]>([])

    return (
        <CartContext.Provider value={{ itemCount, setItemCount, cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};