import { CardioContainer } from "./cardio.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";

import Heart from "../../assets/heart/heart.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

const Cardio = () => {
    return (
        <CardioContainer>
            <Card cardType={CARD_TYPE_CLASSES.exercise}>
                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><Heart />&nbsp;Cardio</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.lead}>Some of the most important muscle tissue to work belongs to a part of the body you can't see: your heart.</Paragraph>
            </Card>
        </CardioContainer>
    );
};

export default Cardio;