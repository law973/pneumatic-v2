import { ExerciseContainer, NextSectionRecovery } from "./exercise.styles";

import Card from "../../components/card/card.component";
import { CARD_TYPE_CLASSES } from "../../components/card/card.component";

import Header from "../../components/header/header.component";
import { HEADER_TYPE_CLASSES } from "../../components/header/header.component";

import Paragraph from "../../components/paragraph/paragraph.component";

import Running from "../../assets/running.component";
import Dumbbell from "../../assets/dumbbell.component";
import Progressive from "../../assets/progressive.component";
import Heart from "../../assets/heart.component";

const Exercise = () => {
    return (
        <ExerciseContainer>
            <Card cardType={CARD_TYPE_CLASSES.exercise}>
                <Header headerType={HEADER_TYPE_CLASSES.primary}><Running/>&nbsp;Exercise</Header>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad perspiciatis quos eius sit ducimus. Unde delectus placeat consequuntur animi reprehenderit vero qui accusantium optio sint culpa. Consectetur, illo illum.</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><Dumbbell/>&nbsp;Strength Training</Header>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque minus dolorem cupiditate enim esse! Dolore perferendis earum ab voluptatem ullam eos quis at, porro, architecto, ipsam tempora neque incidunt.</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.tertiary}><Progressive/>&nbsp;Progressive Overload</Header>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deleniti ad, rem tempore nisi laborum, saepe aspernatur qui blanditiis, fugiat consequuntur corrupti inventore voluptatem beatae ipsam atque quas hic ab.</Paragraph>

                <Header headerType={HEADER_TYPE_CLASSES.secondary}><Heart/>&nbsp;Cardio</Header>
                <Paragraph>Some of the most important muscle tissue to work belongs to a part of the body you can't see: your heart.</Paragraph>
            </Card>
            <NextSectionRecovery to='/recovery'>Next Section: Recovery</NextSectionRecovery>
        </ExerciseContainer>
    );
};

export default Exercise;