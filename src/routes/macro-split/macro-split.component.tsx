import { MacroSplitContainer } from "./macro-split.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";

import PieChart from "../../assets/pie-chart/pie-chart.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

const MacroSplit = () => {
    return (
        <MacroSplitContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><PieChart />&nbsp;Macro Split</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Coming Soon</Paragraph>
            </Card>
        </MacroSplitContainer>
    );
};

export default MacroSplit;