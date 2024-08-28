import { ExerciseContainer, NextSectionRecovery } from "./exercise.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

import Running from "../../assets/running.component";
import Dumbbell from "../../assets/dumbbell.component";
import Progressive from "../../assets/progressive.component";
import Heart from "../../assets/heart.component";

const Exercise = () => {
    return (
        <ExerciseContainer>
            <Card cardType={CARD_TYPE_CLASSES.exercise}>
                <Heading headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><Running/>&nbsp;Exercise</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad perspiciatis quos eius sit ducimus. Unde delectus placeat consequuntur animi reprehenderit vero qui accusantium optio sint culpa. Consectetur, illo illum.</Paragraph>

                <Heading headingType={HEADING_TYPE_CLASSES.headingTwo}><Dumbbell/>&nbsp;Strength Training</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque minus dolorem cupiditate enim esse! Dolore perferendis earum ab voluptatem ullam eos quis at, porro, architecto, ipsam tempora neque incidunt.</Paragraph>

                <Heading headingType={HEADING_TYPE_CLASSES.headingThree}><Progressive/>&nbsp;Progressive Overload</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deleniti ad, rem tempore nisi laborum, saepe aspernatur qui blanditiis, fugiat consequuntur corrupti inventore voluptatem beatae ipsam atque quas hic ab.</Paragraph>

                <Heading headingType={HEADING_TYPE_CLASSES.headingTwo}><Heart/>&nbsp;Cardio</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Some of the most important muscle tissue to work belongs to a part of the body you can't see: your heart.</Paragraph>
            </Card>
            <NextSectionRecovery to='/recovery'>Next Section: Recovery</NextSectionRecovery>
        </ExerciseContainer>
    );
};

export default Exercise;