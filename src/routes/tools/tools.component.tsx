import { ToolsContainer, NextSectionShop } from "./tools.styles";

import Card from "../../components/card/card.component";
import { CARD_TYPE_CLASSES } from "../../components/card/card.component";

import Header from "../../components/header/header.component";
import { HEADER_TYPE_CLASSES } from "../../components/header/header.component";

import Hammer from "../../assets/hammer.component";
import Algebra from "../../assets/algebra.component";
import Target from "../../assets/target.component";
import Clock from "../../assets/clock.component";

import Button from "../../components/button/button.component";

const Tools = () => {
    return (
        <ToolsContainer>
            <Card cardType={CARD_TYPE_CLASSES.tools}>
                <Header headerType={HEADER_TYPE_CLASSES.primary}><Hammer/>Tools</Header>
                <p>The tools in this section will help in putting all of the knowledge provided previously to use.</p>

                <p>The Total Daily Energy Expenditure (TDEE) Calculator will give an estimate of the amount of calories you are burning each day, after the required information is submitted.</p>

                <p>Calorie Goal will give a target for your daily caloric intake based on your estimated TDEE and the amount of weight you wish to gain, lose, or maintain each week.</p>

                <p>The Plate Combination Creator will show you which pairs of plates will need to be used together in order to reach the desired amount of weight on your barbell (assuming you are using an olympic bar, which weighs approximately 45lbs by itself).</p>

                <p>Sleep Time Recommendation will suggest a time to go to sleep at based on the time you wish to wake up. Alternatively, it can suggest a wake-up time based on when you are going to bed.</p>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><Algebra/><abbr title="Total Daily Energy Expenditure">TDEE</abbr>&nbsp;Calculator</Header>
                <p>More needed here</p>
                <Button>Testing</Button>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><Target/>Calorie Goal</Header>
                <p>More needed here too</p>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}>Macro Goal</Header>
                <p>More needed here three</p>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}>Plate Combination Creator</Header>
                <p>More needed here for</p>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><Clock/>Sleep Time Recommendation</Header>
                <p>More needed here 5</p>
            </Card>
            <NextSectionShop to='/shop'>Next Section: Shop</NextSectionShop>
        </ToolsContainer>
    );
};

export default Tools;