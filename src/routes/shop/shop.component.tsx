import { ShopContainer } from "./shop.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

import ShoppingBag from "../../assets/shopping-bag.component";

const Shop = () => {
    return (
        <ShopContainer>
            <Card cardType={CARD_TYPE_CLASSES.shop}>
                <Heading headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><ShoppingBag/>&nbsp;Shop</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quibusdam non, error aliquid odio impedit eaque, eius dicta, exercitationem animi ex incidunt nisi temporibus. Aut cupiditate temporibus accusamus quibusdam ullam?</Paragraph>
            </Card>
        </ShopContainer>
    );
};

export default Shop;