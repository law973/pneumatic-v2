import { DietContainer } from "./diet.styles";

// import { Link } from "react-router-dom";
import { SectionLink } from "../../components/section-link/section-link.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

import Cutlery from "../../assets/icons/diet/cutlery/cutlery.component";
import FastFood from "../../assets/icons/diet/fast-food/fast-food.component";
import Flame from "../../assets/icons/diet/flame/flame.component";

const Diet = () => {
    return (
        <DietContainer>
            <Card cardType={CARD_TYPE_CLASSES.diet}>
                <Heading headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><Cutlery/>&nbsp;Diet</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.lead}>The word "fitness" might bring exercise to mind first, but having a good diet is critical for your progress and overall health.</Paragraph>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>This section delves into general dietary advice, the importance of calories, and the role of nutrients (both macro and micro).</Paragraph>

                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><FastFood/>&nbsp;General Advice</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Before getting into the finer details, there may be a couple of small adjustments you can make to your diet that will result in big differences.<br/><br/>

                First: avoid fast food and sweets.</Paragraph>

                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Fast food is usually high in sodium, sugar, saturated fats, and trans fats, amongst other things. On top of that, it tends to be very calorie-dense, which can pose a problem: it's the volume of the food you eat, not the caloric content, that helps to determine if you feel full, as this is what stretches the stomach. As such, it's easy to consume a lot more calories than you need when eating calorie-dense food.</Paragraph>

                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><Flame />&nbsp;Calories</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus enim, non rem error nostrum accusantium itaque expedita sapiente impedit, eius inventore? Dolorem voluptates excepturi, recusandae impedit libero accusantium atque.</Paragraph>
            </Card>
            <SectionLink to='/exercise'>Next Section: Exercise</SectionLink>
        </DietContainer>
    );
};

export default Diet;