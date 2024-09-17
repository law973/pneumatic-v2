import { SignInContainer } from "./sign-in.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";

import Login from "../../assets/icons/sign-in/login/login.component";

const SignIn = () => {
    return (
        <SignInContainer>
            <Card cardType={CARD_TYPE_CLASSES.signIn}>
                <Heading headingType={HEADING_TYPE_CLASSES.displayHeadingOne}><Login/>&nbsp;Sign In</Heading>
            </Card>
        </SignInContainer>
    );
};

export default SignIn;