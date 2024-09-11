import { NavigationMenuContainer } from "./navigation-menu.styles";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../contexts/menu.context";

const NavigationMenu = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

    return (
        <NavigationMenuContainer className={isMenuOpen ? 'active' : ''}>
            <ul>
                <li>
                    <Link to='/' onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to='diet' onClick={toggleMenu}>Diet</Link>
                </li>
                <li>
                    <Link to='exercise' onClick={toggleMenu}>Exercise</Link>
                </li>
                <li>
                    <Link to='recovery' onClick={toggleMenu}>Recovery</Link>
                </li>
                <li>
                    <Link to='tools' onClick={toggleMenu}>Tools</Link>
                </li>
                <li>
                    <Link to='shop' onClick={toggleMenu}>Shop</Link>
                </li>
            </ul>
        </NavigationMenuContainer>
    );
};

export default NavigationMenu;