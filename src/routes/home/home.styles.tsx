import styled from "styled-components";

export const GreetingContainer = styled.header`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export const GreetingHello = styled.h1`
    font-size: clamp(3rem, 4vw, 7rem);

    span {
        animation: helloMove 0.35s forwards;
        display: inline-block;
        opacity: 0;
		transform: translateY(1em);

        @keyframes helloMove {
            50%	{ transform: translateY(-1.5em); }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        &:nth-child(1) {
			animation-delay: 0.25s;
		}

        &:nth-child(2) {
			animation-delay: 0.4s;
		}

        &:nth-child(3) {
			animation-delay: 0.55s;
		}

        &:nth-child(4) {
			animation-delay: 0.7s;
		}

        &:nth-child(5) {
			animation-delay: 0.85s;
		}

        &:nth-child(6) {
			animation-delay: 1s;
		}
    }
`;

export const GreetingWelcome = styled.h2`
    animation: welcomeAppear 1.25s 1.75s forwards;
    font-size: 3em;
	font-size: 2vmax;
    opacity: 0;

    @keyframes welcomeAppear {
		to { opacity: 1; }
	}
`;

export const IntroductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;