import { StrengthTrainingContainer } from "./strength-training.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";

import Dumbbell from "../../assets/icons/exercise/dumbbell/dumbbell.component";
import Progressive from "../../assets/icons/exercise/progressive/progressive.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

const StrengthTraining = () => {
    return (
        <StrengthTrainingContainer>
            <Card cardType={CARD_TYPE_CLASSES.exercise}>
                <Heading headingType={HEADING_TYPE_CLASSES.headingOne}><Dumbbell />&nbsp;Strength Training</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque minus dolorem cupiditate enim esse! Dolore perferendis earum ab voluptatem ullam eos quis at, porro, architecto, ipsam tempora neque incidunt.</Paragraph>

                <Heading headingType={HEADING_TYPE_CLASSES.headingTwo}><Progressive/>&nbsp;Progressive Overload</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deleniti ad, rem tempore nisi laborum, saepe aspernatur qui blanditiis, fugiat consequuntur corrupti inventore voluptatem beatae ipsam atque quas hic ab.</Paragraph>
            </Card>
        </StrengthTrainingContainer>
    );
};

export default StrengthTraining;