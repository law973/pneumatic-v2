import { ToolsContainer } from "./tools.styles";

import { Link } from "react-router-dom";
import { SectionLink } from "../../components/section-link/section-link.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Header, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

import Hammer from "../../assets/hammer/hammer.component";
import Algebra from "../../assets/algebra/algebra.component";
import Target from "../../assets/target/target.component";
import PieChart from "../../assets/pie-chart/pie-chart.component";
import WeightPlate from "../../assets/weight-plate/weight-plate.component";
import Clock from "../../assets/clock/clock.component";

const Tools = () => {
    return (
        <ToolsContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Header headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><Hammer/>&nbsp;Tools</Header>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.lead}>The tools in this section will help in putting all of the knowledge provided previously to use.</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>The Total Daily Energy Expenditure (TDEE) Calculator will give an estimate of the amount of calories you are burning each day, after the required information is submitted.</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Calorie Goal will give a target for your daily caloric intake based on your estimated TDEE and the amount of weight you wish to gain, lose, or maintain each week.</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Macro Split will help to determine how many grams of protein, fats, and carbs will be needed to reach your daily calorie intake.</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Plate Combos will show you which pairs of plates will need to be used together in order to reach the desired amount of weight on your barbell (assuming you are using an olympic bar, which weighs approximately 45lbs by itself).</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>The Sleep Calculator will suggest a time to go to sleep at based on the time you wish to wake up. Alternatively, it can suggest a wake-up time based on when you are going to bed.</Paragraph>

            </Card>
            <div>
                <Card cardType={CARD_TYPE_CLASSES.tools}>
                    <Header headingType={HEADING_TYPE_CLASSES.headingOne}><Algebra/>&nbsp;<abbr title="Total Daily Energy Expenditure">TDEE</abbr>&nbsp;Calculator</Header>
                    <Link to='/tools/tdee-calculator'>Click here</Link>
                </Card>
                <Card cardType={CARD_TYPE_CLASSES.tools}>
                    <Header headingType={HEADING_TYPE_CLASSES.headingOne}><Target/>&nbsp;Calorie Goal</Header>
                    <Link to='/tools/calorie-goal'>Click here</Link>
                </Card>
                <Card cardType={CARD_TYPE_CLASSES.tools}>
                    <Header headingType={HEADING_TYPE_CLASSES.headingOne}><PieChart />&nbsp;Macro Split</Header>
                    <Link to='/tools/macro-split'>Click here</Link>
                </Card>
                <Card cardType={CARD_TYPE_CLASSES.tools}>
                    <Header headingType={HEADING_TYPE_CLASSES.headingOne}><WeightPlate/>&nbsp;Plate Combos</Header>
                    <Link to='/tools/plate-combos'>Click here</Link>
                </Card>
                <Card cardType={CARD_TYPE_CLASSES.tools}>
                    <Header headingType={HEADING_TYPE_CLASSES.headingOne}><Clock/>&nbsp;Sleep Calculator</Header>
                    <Link to='/tools/sleep-calculator'>Click here</Link>
                </Card>
            </div>
            <SectionLink to='/shop'>Next Section: Shop</SectionLink>
        </ToolsContainer>
    );
};

export default Tools;