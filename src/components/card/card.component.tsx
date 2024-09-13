import { PropsWithChildren } from "react";

import {
    IntroductionCard,
    DietCard,
    ExerciseCard,
    RecoveryCard,
    ToolsCard,
    ShopCard,
    SignInCard
} from './card.styles';

// Accepted values for the cardType prop are specified here
export enum CARD_TYPE_CLASSES {
    introduction = 'introduction',
    diet = 'diet',
    exercise = 'exercise',
    recovery = 'recovery',
    tools = 'tools',
    shop = 'shop',
    signIn = 'signIn'
};

// Card color and styling changes depending on the value of the cardType prop 
const getCard = (cardType: CARD_TYPE_CLASSES): 
    typeof IntroductionCard | typeof DietCard | typeof ExerciseCard | typeof RecoveryCard | typeof ToolsCard | typeof ShopCard =>
({
    [CARD_TYPE_CLASSES.introduction]: IntroductionCard,
    [CARD_TYPE_CLASSES.diet]: DietCard,
    [CARD_TYPE_CLASSES.exercise]: ExerciseCard,
    [CARD_TYPE_CLASSES.recovery]: RecoveryCard,
    [CARD_TYPE_CLASSES.tools]: ToolsCard,
    [CARD_TYPE_CLASSES.shop]: ShopCard,
    [CARD_TYPE_CLASSES.signIn]: SignInCard
}[cardType]);

// Component prop is created here
export type CardProps = {
    cardType: CARD_TYPE_CLASSES;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({ children, cardType }) => {
    const CustomCard = getCard(cardType);
    return <CustomCard>{children}</CustomCard>;
};

export default Card;