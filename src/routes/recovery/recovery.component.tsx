import { RecoveryContainer, NextSectionTools } from "./recovery.styles";

import Card from "../../components/card/card.component";
import { CARD_TYPE_CLASSES } from "../../components/card/card.component";

import Header from "../../components/header/header.component";
import { HEADER_TYPE_CLASSES } from "../../components/header/header.component";

import Bed from "../../assets/bed.component";

const Recovery = () => {
    return (
        <RecoveryContainer>
            <Card cardType={CARD_TYPE_CLASSES.recovery}>
                <Header headerType={HEADER_TYPE_CLASSES.primary}><Bed/>Recovery</Header>
                <p>Even with your diet and exercise in order, there's another crucial aspect to your fitness journey: recovery. What you do (or what you don't do) between workouts is just as important as the intensity of your training.</p>
            </Card>
            <NextSectionTools to='/tools'>Next Section: Tools</NextSectionTools>
        </RecoveryContainer>
    );
};

export default Recovery;