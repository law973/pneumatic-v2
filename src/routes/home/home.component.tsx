import { 
    GreetingContainer, 
    GreetingHello, 
    GreetingWelcome, 
    GreetingArrow,
    IntroductionContainer,
    IntroductionCard 
} from "./home.styles";
import Footer from "../../components/footer/footer.component";
import ArrowIcon from "../../components/arrow-icon/arrow-icon.component";
import ArrowDown from "../../assets/arrow-down.component";

const Home = () => {
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
                    <ArrowIcon href="#introduction" title="Introduction" icon={<ArrowDown />}/>
                </GreetingArrow>
            </GreetingContainer>
            {/* This section has a description of what the website provides */}
            <IntroductionContainer id="introduction">
                <IntroductionCard>
                    <p>
                        This website is designed to help you reach your fitness goals and tap into your true potential.
                    </p>
                    <p>
                        The three main elements to improving your physical well-being are <strong>diet</strong>, <strong>exercise</strong>, and <strong>recovery</strong>. 
                        There are sections that will cover each element individually, and provide you with the information you'll need 
                        (and the <strong>tools</strong> you'll want) as you proceed on your fitness journey.
                    </p>

                    <p>(There's also a <strong>shop</strong> too...)</p>

                    <p>Let's get started!</p>
                </IntroductionCard>
            </IntroductionContainer>
            {/* Contains links to the author's social profiles */}
            <Footer />
        </>
    )
};

export default Home;