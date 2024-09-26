import { ExerciseContainer } from "./exercise.styles";

import { Link } from "react-router-dom";
import { SectionLink } from "../../components/section-link/section-link.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

import Running from "../../assets/icons/exercise/running/running.component";
import Dumbbell from "../../assets/icons/exercise/dumbbell/dumbbell.component";
import Heart from "../../assets/icons/exercise/heart/heart.component";

const Exercise = () => {
    return (
        <ExerciseContainer>
            <Card cardType={CARD_TYPE_CLASSES.exercise}>
                <Heading headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><Running/>&nbsp;Exercise</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad perspiciatis quos eius sit ducimus. Unde delectus placeat consequuntur animi reprehenderit vero qui accusantium optio sint culpa. Consectetur, illo illum.</Paragraph>
            </Card>
            <div>
                <Card cardType={CARD_TYPE_CLASSES.exercise}>
                    <Heading headingType={HEADING_TYPE_CLASSES.headingThree}><Dumbbell/>&nbsp;Strength Training</Heading>
                    <Link to='strength-training'>Click here</Link>
                </Card>

                <Card cardType={CARD_TYPE_CLASSES.exercise}>
                    <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><Heart/>&nbsp;Cardio</Heading>
                    <Link to='cardio'>Click here</Link>
                </Card>
            </div>
            <SectionLink to='/recovery'>Next Section: Recovery</SectionLink>
        </ExerciseContainer>
    );
};

export default Exercise;