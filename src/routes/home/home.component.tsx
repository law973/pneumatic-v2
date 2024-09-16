import { useRef } from "react";

import { 
    GreetingContainer, 
    GreetingHello, 
    GreetingWelcome, 
    GreetingArrow,
    IntroductionContainer
} from "./home.styles";

import { SectionLink } from "../../components/section-link/section-link.styles";

import Card, { CARD_TYPE_CLASSES } from "../../components/card/card.component";
import Heading, { HEADING_TYPE_CLASSES } from "../../components/heading/heading.component";
import Paragraph, { PARAGRAPH_TYPE_CLASSES } from "../../components/paragraph/paragraph.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import ArrowDown from "../../assets/arrow-down.component";

const Home = () => {

    const introSection = useRef<HTMLDivElement>(null);

    const scrollTo = () => { 
        if (introSection.current) {
            window.scrollTo({ top: introSection.current.offsetTop });
        } 
    };

    return (
        <>
            <GreetingContainer>
                {/* The hello text and welcome text are located here */}
                <div>
                    <GreetingHello>
                        {/* Spans are targeted to delay the animation for each individual letter */}
                        <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>!</span>
                    </GreetingHello>
                    <GreetingWelcome>
                        {/* The welcome text appears after the hello text */}
                        Welcome to <em>Pneumatic</em>
                    </GreetingWelcome>
                </div>
                {/* The arrow leading to the introduction page is located here */}
                <GreetingArrow>
                    <Button buttonType={BUTTON_TYPE_CLASSES.arrow} onClick={scrollTo} title="Introduction">
                        <ArrowDown />
                    </Button>
                </GreetingArrow>
            </GreetingContainer>
            {/* This section has a description of what the website provides */}
            <IntroductionContainer ref={introSection}>
                <Card cardType={CARD_TYPE_CLASSES.introduction} >
                    <Heading headingType={HEADING_TYPE_CLASSES.headingOne}>Introduction</Heading>
                    <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.lead}>
                        This website is designed to help you reach your fitness goals and tap into your true potential.
                    </Paragraph>
                    <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>
                        The three main elements to improving your physical well-being are <strong>diet</strong>, <strong>exercise</strong>, and <strong>recovery</strong>. 
                        There are sections that will cover each element individually, and provide you with the information you'll need 
                        (and the <strong>tools</strong> you'll want) as you proceed on your fitness journey.
                    </Paragraph>

                    <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>(There's also a <strong>shop</strong> too...)</Paragraph>

                    <Paragraph paragraphType={PARAGRAPH_TYPE_CLASSES.regular}>Let's get started!</Paragraph>
                </Card>
                <SectionLink to='/diet'>Next Section: Diet</SectionLink>
            </IntroductionContainer>
        </>
    )
};

export default Home;