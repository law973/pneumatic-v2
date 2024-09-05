import { NavigationContainer, NavigationLogoContainer, NavigationLinksContainer } from "./navigation.styles";

import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <NavigationContainer>
            <NavigationLogoContainer>P</NavigationLogoContainer>

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