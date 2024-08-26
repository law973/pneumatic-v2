import { 
    GreetingContainer, 
    GreetingHello, 
    GreetingWelcome, 
    GreetingArrow,
    IntroductionContainer, 
    NextSection
} from "./home.styles";

import Card from "../../components/card/card.component";
import { CARD_TYPE_CLASSES } from '../../components/card/card.component';

import Paragraph from "../../components/paragraph/paragraph.component";

import Footer from "../../components/footer/footer.component";

import ArrowIcon from "../../components/arrow-icon/arrow-icon.component";
import ArrowDown from "../../assets/arrow-down.component";

const Home = () => {
    return (
        <>
            <GreetingContainer>
                {/* The hello text and welcome text are located here */}
                <header>
                    <GreetingHello>
                        {/* Spans are targeted to delay the animation for each individual letter */}
                        <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>!</span>
                    </GreetingHello>
                    <GreetingWelcome>
                        {/* The welcome text appears after the hello text */}
                        Welcome to <em>Pneumatic</em>
                    </GreetingWelcome>
                </header>
                {/* The arrow leading to the introduction page is located here */}
                <GreetingArrow>
                    <ArrowIcon href="#introduction" title="Introduction" icon={<ArrowDown />}/>
                </GreetingArrow>
            </GreetingContainer>
            {/* This section has a description of what the website provides */}
            <IntroductionContainer id="introduction">
                <Card cardType={CARD_TYPE_CLASSES.introduction} >
                    <Paragraph>
                        This website is designed to help you reach your fitness goals and tap into your true potential.
                    </Paragraph>
                    <Paragraph>
                        The three main elements to improving your physical well-being are <strong>diet</strong>, <strong>exercise</strong>, and <strong>recovery</strong>. 
                        There are sections that will cover each element individually, and provide you with the information you'll need 
                        (and the <strong>tools</strong> you'll want) as you proceed on your fitness journey.
                    </Paragraph>

                    <Paragraph>(There's also a <strong>shop</strong> too...)</Paragraph>

                    <Paragraph>Let's get started!</Paragraph>
                </Card>
                <NextSection to='/diet'>Next Section: Diet</NextSection>
            </IntroductionContainer>
            {/* Footer contains links to the author's social profiles */}
            <Footer />
        </>
    )
};

export default Home;