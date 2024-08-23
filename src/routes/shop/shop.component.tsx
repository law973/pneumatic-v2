import { ShopContainer } from "./shop.styles";

import Card from "../../components/card/card.component";
import { CARD_TYPE_CLASSES } from "../../components/card/card.component";

import Header from "../../components/header/header.component";
import { HEADER_TYPE_CLASSES } from "../../components/header/header.component";

import ShoppingBag from "../../assets/shopping-bag.component";

const Shop = () => {
    return (
        <ShopContainer>
            <Card cardType={CARD_TYPE_CLASSES.shop}>
                <Header headerType={HEADER_TYPE_CLASSES.primary}><ShoppingBag/>Shop</Header>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quibusdam non, error aliquid odio impedit eaque, eius dicta, exercitationem animi ex incidunt nisi temporibus. Aut cupiditate temporibus accusamus quibusdam ullam?</p>
            </Card>
        </ShopContainer>
    );
};

export default Shop;