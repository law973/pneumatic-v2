import { 
    NavigationBarContainer, 
    SmallLogoContainer, 
    LargeLogoContainer,
    NavigationBarLinksContainer ,
    NavigationMenuContainer
} from "./navigation.styles";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../contexts/menu.context";
import HamburgerButton from "../hamburger-button/hamburger-button.component";

const Navigation = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

    return (
        <>
            <NavigationBarContainer>
                <SmallLogoContainer>P</SmallLogoContainer>
                <LargeLogoContainer>Pneumatic</LargeLogoContainer>

                <HamburgerButton />

                <NavigationBarLinksContainer>
                    <Link to='/'>Home</Link>
                    <Link to='diet'>Diet</Link>
                    <Link to='exercise'>Exercise</Link>
                    <Link to='recovery'>Recovery</Link>
                    <Link to='tools'>Tools</Link>
                    <Link to='shop'>Shop</Link>
                </NavigationBarLinksContainer>
            </NavigationBarContainer>
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
        </>
    );
};

export default Navigation;