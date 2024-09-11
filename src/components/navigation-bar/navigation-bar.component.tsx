import { 
    NavigationBarContainer,
    SmallLogoContainer,
    LargeLogoContainer,
    NavigationBarLinksContainer
} from "./navigation-bar.styles";

import { Link } from "react-router-dom";

import HamburgerButton from "../hamburger-button/hamburger-button.component";

const NavigationBar = () => {
    return (
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
    );
}

export default NavigationBar;