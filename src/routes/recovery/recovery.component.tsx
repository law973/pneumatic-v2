import { RecoveryContainer, NextSectionTools } from "./recovery.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Header, { HEADER_TYPE_CLASSES } from "../../components/header/header.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";

import Bed from "../../assets/bed.component";

const Recovery = () => {
    return (
        <RecoveryContainer>
            <Card cardType={CARD_TYPE_CLASSES.recovery}>
                <Header headerType={HEADER_TYPE_CLASSES.primary}><Bed/>&nbsp;Recovery</Header>
                <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Even with your diet and exercise in order, there's another crucial aspect to your fitness journey: recovery. What you do (or what you don't do) between workouts is just as important as the intensity of your training.</Paragraph>
            </Card>
            <NextSectionTools to='/tools'>Next Section: Tools</NextSectionTools>
        </RecoveryContainer>
    );
};

export default Recovery;