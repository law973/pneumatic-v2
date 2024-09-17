import { PlateCombosContainer } from "./plate-combos.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";

import WeightPlate from "../../assets/icons/tools/weight-plate/weight-plate.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

const PlateCombos = () => {
    return (
        <PlateCombosContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><WeightPlate />&nbsp;Plate Combos</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Coming Soon</Paragraph>
            </Card>
        </PlateCombosContainer>
    );
};

export default PlateCombos;