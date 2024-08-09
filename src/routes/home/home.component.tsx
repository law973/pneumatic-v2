import { 
    GreetingContainer, 
    GreetingHello, 
    GreetingWelcome, 
    IntroductionContainer 
} from "./home.styles";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <>
            {/* The hello text, welcome text, and arrow are located here */}
            <GreetingContainer>
                <GreetingHello>
                    {/* Spans are targeted to delay the animation for each individual letter */}
                    <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>!</span>
                </GreetingHello>
                <GreetingWelcome>
                    {/* The welcome text appears after the hello text */}
                    Welcome to <em>Pneumatic</em>
                </GreetingWelcome>
            </GreetingContainer>
            {/* This section has a description of what the website provides */}
            <IntroductionContainer>
                <p>This website is designed to help you reach your fitness goals and tap into your true potential.</p>

                <p>The three main elements to improving your physical well-being are <strong>diet</strong>, <strong>exercise</strong>, and <strong>recovery</strong>. 
                    The sections below will cover each element individually, and provide you with the information you'll need 
                    (and the <strong>tools</strong> you'll want) as you proceed on your fitness journey...
                </p>
                
                <p>Let's get started!</p>
            </IntroductionContainer>
            <Footer />
        </>
    )
};

export default Home;