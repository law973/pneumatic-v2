import { 
    NavigationBarContainer,
    SmallLogoContainer,
    LargeLogoContainer,
    NavigationBarLinksContainer
} from "./navigation-bar.styles";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <SmallLogoContainer to='/' title="Home">P</SmallLogoContainer>
            <LargeLogoContainer to='/' title="Home">Pneumatic</LargeLogoContainer>

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
    );
};

export default NavigationBar;