import { Outlet } from "react-router-dom";

import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import NavigationMenu from "../../components/navigation-menu/navigation-menu.component";
import Footer from "../../components/footer/footer.component";

// Navigation bar appears on every page
const Navigation = () => (
    <>
        <NavigationBar />
        <NavigationMenu />
        <Outlet />
        <Footer />
    </>
);

export default Navigation;