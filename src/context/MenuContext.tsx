import React, { createContext, useContext, ReactNode } from 'react';


interface MenuContextProps {
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}


const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedItem, setSelectedItem] = React.useState<string>("");

    return (
        <MenuContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </MenuContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
};

