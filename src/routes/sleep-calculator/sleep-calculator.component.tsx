import { SleepCalculatorContainer } from "./sleep-calculator.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";

import Clock from "../../assets/icons/tools/clock/clock.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

const SleepCalculator = () => {
    return (
        <SleepCalculatorContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><Clock />&nbsp;Sleep Calculator</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Coming Soon</Paragraph>
            </Card>
        </SleepCalculatorContainer>
    );
};

export default SleepCalculator;