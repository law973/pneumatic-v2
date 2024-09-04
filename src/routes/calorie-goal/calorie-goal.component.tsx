import { CalorieGoalContainer } from "./calorie-goal.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";

import Target from "../../assets/target/target.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

const CalorieGoal = () => {
    return (
        <CalorieGoalContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><Target />&nbsp;Calorie Goal</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Coming Soon</Paragraph>
            </Card>
        </CalorieGoalContainer>
    );
};

export default CalorieGoal;