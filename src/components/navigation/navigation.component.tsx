import { 
    NavigationContainer, 
    SmallLogoContainer, 
    LargeLogoContainer,
    NavigationLinksContainer 
} from "./navigation.styles";

import { Link } from "react-router-dom";

import HamburgerButton from "../hamburger-button/hamburger-button.component";

const Navigation = () => {
    return (
        <NavigationContainer>
            <SmallLogoContainer>P</SmallLogoContainer>
            <LargeLogoContainer>Pneumatic</LargeLogoContainer>

            <HamburgerButton />

            <NavigationLinksContainer>
                <Link to='/'>Home</Link>
                <Link to='diet'>Diet</Link>
                <Link to='exercise'>Exercise</Link>
                <Link to='recovery'>Recovery</Link>
                <Link to='tools'>Tools</Link>
                <Link to='shop'>Shop</Link>
            </NavigationLinksContainer>
        </NavigationContainer>
    );
};

export default Navigation;