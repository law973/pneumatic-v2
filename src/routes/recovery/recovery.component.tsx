import { RecoveryContainer } from "./recovery.styles";

import { SectionLink } from "../../components/section-link/section-link.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

import Bed from "../../assets/icons/recovery/bed/bed.component";

const Recovery = () => {
    return (
        <RecoveryContainer>
            <Card cardType={CARD_TYPE_CLASSES.recovery}>
                <Heading headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><Bed/>&nbsp;Recovery</Heading>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Even with your diet and exercise in order, there's another crucial aspect to your fitness journey: recovery. What you do (or what you don't do) between workouts is just as important as the intensity of your training.</Paragraph>
            </Card>
            <SectionLink to='/tools'>Next Section: Tools</SectionLink>
        </RecoveryContainer>
    );
};

export default Recovery;