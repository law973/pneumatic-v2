import { 
    createContext, 
    useState, 
    PropsWithChildren, 
    Dispatch, 
    SetStateAction 
} from 'react';

type MenuContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {}
});

export const MenuProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const value = { isMenuOpen, setIsMenuOpen };

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
};