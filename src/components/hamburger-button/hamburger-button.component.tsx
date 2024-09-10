import { HamburgerButtonContainer } from "./hamburger-button.styles";

import { useContext } from "react";

import { MenuContext } from "../../contexts/menu.context";

const HamburgerButton = () => {
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

    return (
        <HamburgerButtonContainer 
			className={isMenuOpen ? 'active' : ''}
			onClick={toggleMenu} 
			title="Navigation Menu"
		>
			<div/>
			<div/>
			<div/>
		</HamburgerButtonContainer>
    );
};

export default HamburgerButton;