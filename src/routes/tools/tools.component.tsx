import { ToolsContainer, NextSectionShop } from "./tools.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Header, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import Hammer from "../../assets/hammer.component";
import Algebra from "../../assets/algebra.component";
import Target from "../../assets/target.component";
import Clock from "../../assets/clock.component";

const Tools = () => {
    return (
        <ToolsContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Header headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><Hammer/>&nbsp;Tools</Header>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.lead}>The tools in this section will help in putting all of the knowledge provided previously to use.</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>The Total Daily Energy Expenditure (TDEE) Calculator will give an estimate of the amount of calories you are burning each day, after the required information is submitted.</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Calorie Goal will give a target for your daily caloric intake based on your estimated TDEE and the amount of weight you wish to gain, lose, or maintain each week.</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>The Plate Combination Creator will show you which pairs of plates will need to be used together in order to reach the desired amount of weight on your barbell (assuming you are using an olympic bar, which weighs approximately 45lbs by itself).</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Sleep Time Recommendation will suggest a time to go to sleep at based on the time you wish to wake up. Alternatively, it can suggest a wake-up time based on when you are going to bed.</Paragraph>

                <Header headingType={HEADING_TYPE_CLASSES.headingOne}><Algebra/>&nbsp;<abbr title="Total Daily Energy Expenditure">TDEE</abbr>&nbsp;Calculator</Header>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>More needed here</Paragraph>
                <Button buttonType={BUTTON_TYPE_CLASSES.tools}>Testing</Button>

                <Header headingType={HEADING_TYPE_CLASSES.headingOne}><Target/>&nbsp;Calorie Goal</Header>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>More needed here too</Paragraph>

                <Header headingType={HEADING_TYPE_CLASSES.headingOne}>Macro Goal</Header>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>More needed here three</Paragraph>

                <Header headingType={HEADING_TYPE_CLASSES.headingOne}>Plate Combination Creator</Header>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>More needed here for</Paragraph>

                <Header headingType={HEADING_TYPE_CLASSES.headingOne}><Clock/>&nbsp;Sleep Calculator</Header>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>More needed here 5</Paragraph>
            </Card>
            <NextSectionShop to='/shop'>Next Section: Shop</NextSectionShop>
        </ToolsContainer>
    );
};

export default Tools;