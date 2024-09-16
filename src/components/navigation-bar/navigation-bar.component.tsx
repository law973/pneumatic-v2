import { 
    NavigationBarContainer,
    SmallLogoContainer,
    LargeLogoContainer,
    NavigationBarLeftContainer,
    NavigationBarLinksContainer,
    NavigationBarLink,
    SignInLink
} from "./navigation-bar.styles";

import { useState, useEffect } from "react";

import HamburgerButton from "../hamburger-button/hamburger-button.component";

const NavigationBar = () => {
    // State variables to manage scroll behavior
    const [previousScrollPosition, setPreviousScrollPosition] = useState(window.scrollY);

    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            if (previousScrollPosition > currentScrollPosition) {
                // Show navbar
                setIsScrollingUp(true); 
            } else {
                // Hide navbar
                setIsScrollingUp(false);
            }
            setPreviousScrollPosition(currentScrollPosition);
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        
        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [previousScrollPosition]);

    return (
        <NavigationBarContainer
            className={isScrollingUp ? 'active' : ''}
        >
            <NavigationBarLeftContainer>
                <SmallLogoContainer to='/' title="Home">P</SmallLogoContainer>
                <LargeLogoContainer to='/' title="Home">Pneumatic</LargeLogoContainer>
                    <NavigationBarLinksContainer>
                        <NavigationBarLink to='diet'>Diet</NavigationBarLink>
                        <NavigationBarLink to='exercise'>Exercise</NavigationBarLink>
                        <NavigationBarLink to='recovery'>Recovery</NavigationBarLink>
                        <NavigationBarLink to='tools'>Tools</NavigationBarLink>
                        <NavigationBarLink to='shop'>Shop</NavigationBarLink>
                    </NavigationBarLinksContainer>
            </NavigationBarLeftContainer>

            <HamburgerButton />
            <SignInLink to='sign-in'>Sign In</SignInLink>
        </NavigationBarContainer>
    );
};

export default NavigationBar;