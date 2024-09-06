import { HamburgerButtonContainer } from "./hamburger-button.styles";

import { useState } from "react";

const HamburgerButton = () => {
	const [isActive, setActive] = useState(false);

	const toggleMenu = () => {
		setActive(!isActive);
	}

    return (
        <HamburgerButtonContainer 
			className={isActive ? 'active' : ''}
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