import { ShopContainer } from "./shop.styles";
import Card from "../../components/card/card.component";
import { CARD_TYPE_CLASSES } from "../../components/card/card.component";

const Shop = () => {
    return (
        <ShopContainer>
            <Card cardType={CARD_TYPE_CLASSES.shop}>
                <h1>Shop</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quibusdam non, error aliquid odio impedit eaque, eius dicta, exercitationem animi ex incidunt nisi temporibus. Aut cupiditate temporibus accusamus quibusdam ullam?</p>
            </Card>
        </ShopContainer>
    );
};

export default Shop;