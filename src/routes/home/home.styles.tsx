import styled from "styled-components";

import { Card } from "../../components/card/card.styles";

// Styling for container of hello text, welcome text, and arrow
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

// Styling for hello text
export const GreetingHello = styled.h1`
    /* Default portrait font size (iPhone SE) */
    font-size: 20vw;
    margin: auto 0;

    /* Default landscape font size (iPhone SE) */
    @media screen and (orientation: landscape) {
        font-size: 12vw;
    }

    /* (Surface Duo) Landscape font size */
    @media screen and (min-width: 720px) and (orientation: landscape) {
        font-size: 15vw;
    }
    
    /* (Samsung Galaxy S8+) Landscape font size */
    @media screen and (min-width: 740px) and (orientation: landscape) {
        font-size: 10vw;
    }

    /* (Galaxy Z Fold 5) Landscape font size */
    @media screen and (min-width: 882px) and (orientation: landscape) {
        font-size: 8vw;
    }

    /* Larger mobile device landscapes have the auto top and bottom margin restored */
    @media screen and (min-width: 933px) and (orientation: landscape) {
        margin: auto;
    }

    /* (Nest Hub) Landscape font size */
    @media screen and (min-width: 1024px) and (orientation: landscape) {
        font-size: 12vw;
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

        /* Each subsequent letter has a greater animation delay */
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

        /* Text appears instantly if reduced motion is preferred */
        @media (prefers-reduced-motion: reduce) {
            animation: none;
			opacity: 1;
			transform: translateY(0);
        }
    }
`;

// Styling for welcome text
export const GreetingWelcome = styled.h2`
    animation: welcomeAppear 1.25s 1.75s forwards;
    /* Default portrait font size (iPhone SE) */
    font-size: 12vw;
    opacity: 0;

    @keyframes welcomeAppear {
		to { opacity: 1; }
	}

    /* Default landscape font size (iPhone SE) */
    @media screen and (orientation: landscape) {
        font-size: 7vw;
        margin: auto 0;
    }

    /* (Samsung Galaxy S8+) Landscape font size */
    @media screen and (min-width: 740px) and (orientation: landscape) {
        font-size: 6vw;
    }

    /* (Galaxy Z Fold 5) Landscape font size */
    @media screen and (min-width: 882px) and (orientation: landscape) {
        font-size: 5vw;
    }

    /* (Nest Hub) Landscape font size */
    @media screen and (min-width: 1024px) and (orientation: landscape) {
        font-size: 7vw;
    }

    /* Text appears instantly if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }
`;

// Styling for arrow
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
        0% { transform: translate(-50%, 10%); }
        100% {
            transform: translate(-50%, -5%);
        }
    }

    /* Larger mobile device landscapes have a greater range of motion for the arrow */
    @media screen and (min-width: 933px) and (orientation: landscape) {

        @keyframes downArrowMove {
            0% { transform: translate(-50%, 0); }
            100% {
                transform: translate(-50%, -33%);
            }
        }
    }

    /* Arrow appears instantly and has no motion if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
        transform: translateX(-50%);
    }
`;

// Styling for container of introduction text
export const IntroductionContainer = styled.section`
    background-color: #0000ff;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

// Styling for introduction card
export const IntroductionCard = styled(Card)`
    background-color: #00008f;
    color: #fff;

    ::selection {
        background-color: #add8e6;
        color: #000;
    }
`;