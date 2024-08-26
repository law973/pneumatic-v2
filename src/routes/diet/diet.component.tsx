import { DietContainer, NextSectionExercise } from "./diet.styles";

import Card from "../../components/card/card.component";
import { CARD_TYPE_CLASSES } from "../../components/card/card.component";

import Header from "../../components/header/header.component";
import { HEADER_TYPE_CLASSES } from "../../components/header/header.component";

import Paragraph from "../../components/paragraph/paragraph.component";

import Cutlery from "../../assets/cutlery.component";
import FastFood from "../../assets/fast-food.component";

const Diet = () => {
    return (
        <DietContainer>
            <Card cardType={CARD_TYPE_CLASSES.diet}>
                <Header headerType={HEADER_TYPE_CLASSES.primary}><Cutlery/>&nbsp;Diet</Header>
                <Paragraph>The word "fitness" might bring exercise to mind first, but having a good diet is critical for your progress and overall health. This section delves into general dietary advice, the importance of calories, and the role of nutrients (both macro and micro).</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><FastFood/>&nbsp;General Advice</Header>
                <Paragraph>Before getting into the finer details, there may be a couple of small adjustments you can make to your diet that will result in big differences.<br/><br/>

                First: avoid fast food and sweets.</Paragraph>

                <Paragraph>Fast food is usually high in sodium, sugar, saturated fats, and trans fats, amongst other things. On top of that, it tends to be very calorie-dense, which can pose a problem: it's the volume of the food you eat, not the caloric content, that helps to determine if you feel full, as this is what stretches the stomach. As such, it's easy to consume a lot more calories than you need when eating calorie-dense food.</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}>Calories</Header>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus enim, non rem error nostrum accusantium itaque expedita sapiente impedit, eius inventore? Dolorem voluptates excepturi, recusandae impedit libero accusantium atque.</Paragraph>
            </Card>
            <NextSectionExercise to='/exercise'>Next Section: Exercise</NextSectionExercise>
        </DietContainer>
    );
};

export default Diet;