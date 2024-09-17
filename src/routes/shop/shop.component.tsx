import { ShopContainer } from "./shop.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

import ShoppingBag from "../../assets/icons/shop/shopping-bag/shopping-bag.component";

const Shop = () => {
    return (
        <ShopContainer>
            <Card cardType={CARD_TYPE_CLASSES.shop}>
                <Heading headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><ShoppingBag/>&nbsp;Shop</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.lead}>Using good equipment and dietary supplements can help you reach your goals efficiently.</Paragraph>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>This shop offers a variety of choices for barbells, dumbbells, and plates.
                    In addition, multiple options for protein powder are available in the supplements category.
                </Paragraph>
            </Card>
        </ShopContainer>
    );
};

export default Shop;