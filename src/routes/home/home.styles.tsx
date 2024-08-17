import styled from "styled-components";

import { Card } from "../../components/card/card.styles";

export const GreetingContainer = styled.header`
    background-color: #0000ff;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

    ::selection {
        background-color: #fff;
        color: #000;
    }
`;

export const GreetingHello = styled.h1`
    font-size: clamp(4.5rem, 4vw, 7rem);

    @media screen and (max-width: 667px) and (orientation: landscape) {
        margin: auto 0;
    }

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

        @media (prefers-reduced-motion: reduce) {
            animation: none;
			opacity: 1;
			transform: translateY(0);
        }
    }
`;

export const GreetingWelcome = styled.h2`
    animation: welcomeAppear 1.25s 1.75s forwards;
    font-size: clamp(2rem, 2vw, 3rem);
    opacity: 0;

    @keyframes welcomeAppear {
		to { opacity: 1; }
	}

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }
`;

export const GreetingArrow = styled.div`
    animation: arrowAppear 1.25s 2.75s forwards, downArrowMove 1.25s ease-in-out 2.75s infinite alternate;
    bottom: 0;
    left: 50%;
    opacity: 0;
    position: absolute;
    transform: translateX(-50%);

    @keyframes arrowAppear {
		to { opacity: 1; }
	}

    @keyframes downArrowMove {
        0% { transform: translate(-50%, 0); }
        100% {
            transform: translate(-50%, -33%);
        }
    }

    @media screen and (max-width: 667px) and (orientation: landscape) {
        

        @keyframes downArrowMove {
            0% { transform: translate(-50%, 10%); }
            100% {
                transform: translate(-50%, -5%);
            }
        }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
        transform: translateX(-50%);
    }
`;

export const IntroductionContainer = styled.section`
    background-color: #0000ff;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export const IntroductionCard = styled(Card)`
    background-color: #00008f;
    color: #fff;

    ::selection {
        background-color: #add8e6;
        color: #000;
    }
`;