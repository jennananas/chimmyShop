import React, { createContext, useContext, ReactNode } from 'react';

interface CartContextProps {
    itemCount: number;
    setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [itemCount, setItemCount] = React.useState<number>(0);

    return (
        <CartContext.Provider value={{ itemCount, setItemCount }}>
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