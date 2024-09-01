import { TDEECalculatorContainer } from "./tdee-calculator.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import TDEEForm from "../../components/tdee-form/tdee-form.component";

import Algebra from "../../assets/algebra.component";

const TDEECalculator = () => {
    return (
        <TDEECalculatorContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><Algebra />&nbsp;<abbr title="Total Daily Energy Expenditure">TDEE</abbr>&nbsp;Calculator</Heading>
                <TDEEForm />
            </Card>
        </TDEECalculatorContainer>
    );
};

export default TDEECalculator;