import { ToolsContainer, NextSectionShop } from "./tools.styles";

import Card from "../../components/card/card.component";
import { CARD_TYPE_CLASSES } from "../../components/card/card.component";

import Header from "../../components/header/header.component";
import { HEADER_TYPE_CLASSES } from "../../components/header/header.component";

import Paragraph from "../../components/paragraph/paragraph.component";

import Hammer from "../../assets/hammer.component";
import Algebra from "../../assets/algebra.component";
import Target from "../../assets/target.component";
import Clock from "../../assets/clock.component";

import Button from "../../components/button/button.component";

const Tools = () => {
    return (
        <ToolsContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Header headerType={HEADER_TYPE_CLASSES.primary}><Hammer/>&nbsp;Tools</Header>
                <Paragraph>The tools in this section will help in putting all of the knowledge provided previously to use.</Paragraph>

                <Paragraph>The Total Daily Energy Expenditure (TDEE) Calculator will give an estimate of the amount of calories you are burning each day, after the required information is submitted.</Paragraph>

                <Paragraph>Calorie Goal will give a target for your daily caloric intake based on your estimated TDEE and the amount of weight you wish to gain, lose, or maintain each week.</Paragraph>

                <Paragraph>The Plate Combination Creator will show you which pairs of plates will need to be used together in order to reach the desired amount of weight on your barbell (assuming you are using an olympic bar, which weighs approximately 45lbs by itself).</Paragraph>

                <Paragraph>Sleep Time Recommendation will suggest a time to go to sleep at based on the time you wish to wake up. Alternatively, it can suggest a wake-up time based on when you are going to bed.</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><Algebra/>&nbsp;<abbr title="Total Daily Energy Expenditure">TDEE</abbr>&nbsp;Calculator</Header>
                <Paragraph>More needed here</Paragraph>
                <Button>Testing</Button>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><Target/>&nbsp;Calorie Goal</Header>
                <Paragraph>More needed here too</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}>Macro Goal</Header>
                <Paragraph>More needed here three</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}>Plate Combination Creator</Header>
                <Paragraph>More needed here for</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><Clock/>&nbsp;Sleep Time Recommendation</Header>
                <Paragraph>More needed here 5</Paragraph>
            </Card>
            <NextSectionShop to='/shop'>Next Section: Shop</NextSectionShop>
        </ToolsContainer>
    );
};

export default Tools;