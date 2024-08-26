import styled from "styled-components";

import { Link } from "react-router-dom";

// Styling for container of hello text, welcome text, and arrow
export const GreetingContainer = styled.section`
    background-color: #0000ff;
    color: #fff;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;

    ::selection {
        background-color: #fff;
        color: #000;
    }
`;

// Styling for hello text
export const GreetingHello = styled.h1`
    /* Default font size */
    font-size: 5.5rem;
    margin: auto 0;

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

    /* Portrait Breakpoints -------------------- */

    /* Breakpoint (Small) */
    @media screen and (min-width: 576px) {
        font-size: 7.5rem;
    }

    /* Breakpoint (Medium) */
    @media screen and (min-width: 768px) {
        font-size: 8rem;
    }

    /* Breakpoint (Large) */
    @media screen and (min-width: 992px) {
        font-size: 12rem;
    }

    /* Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) {
        font-size: 12.25rem;
    }

    /* Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) {
        font-size: 14rem;
    }

    /* Landscape Breakpoints -------------------- */

    /* Landscape Breakpoint (X-Small) */
    /* @media screen and (orientation: landscape) {
        
    } */

    /* Landscape Breakpoint (Small) */
    @media screen and (min-width: 576px) and (orientation: landscape) {
        font-size: 4.5rem;
    }

    /* Landscape Breakpoint (Medium) */
    @media screen and (min-width: 768px) and (orientation: landscape) {
        font-size: 5rem;
    }

    /* Landscape Breakpoint (Large) */
    @media screen and (min-width: 992px) and (orientation: landscape) {
        font-size: 7rem;
    }

    /* Landscape Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) and (orientation: landscape) {
        font-size: 8rem;
    }

    /* Landscape Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) and (orientation: landscape) {
        font-size: 9rem;
    }
`;

// Styling for welcome text
export const GreetingWelcome = styled.h2`
    animation: welcomeAppear 1.25s 1.75s forwards;
    /* Default portrait font size (iPhone SE) */
    font-size: 3.25rem;
    margin-bottom: 0;
    opacity: 0;

    @keyframes welcomeAppear {
		to { opacity: 1; }
	}

    /* Portrait Breakpoints -------------------- */

    /* Breakpoint (Small) */
    @media screen and (min-width: 576px) {
        font-size: 5rem;
    }

    /* Breakpoint (Medium) */
    @media screen and (min-width: 768px) {
        font-size: 5.5rem;
    }

    /* Breakpoint (Large) */
    @media screen and (min-width: 992px) {
        font-size: 8rem;
    }

    /* Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) {
        font-size: 8.25rem;
    }

    /* Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) {
        font-size: 10rem;
    }

    /* Landscape Breakpoints -------------------- */

    /* Landscape Breakpoint (X-Small) */
    /* FONT SIZE PROBABLY NEEDS ADJUSTING */
    @media screen and (orientation: landscape) {
        margin-top: 0;
    }

    /* Landscape Breakpoint (Small) */
    @media screen and (min-width: 576px) and (orientation: landscape) {
        font-size: 3rem;
    }

    /* Landscape Breakpoint (Medium) */
    @media screen and (min-width: 768px) and (orientation: landscape) {
        font-size: 3.5rem;
    }

    /* Landscape Breakpoint (Large) */
    @media screen and (min-width: 992px) and (orientation: landscape) {
        font-size: 4.5rem;
    }

    /* Landscape Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) and (orientation: landscape) {
        font-size: 5.5rem;
    }

    /* Landscape Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) and (orientation: landscape) {
        font-size: 6.5rem;
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
        0% { transform: translate(-50%, 0); }
        100% {
            transform: translate(-50%, -33%);
        }
    }

    /* Arrow has reduced range of motion in mobile landscape orientation */
    @media screen and (orientation: landscape) {
        @keyframes downArrowMove {
            0% { transform: translate(-50%, 10%); }
            100% {
                transform: translate(-50%, -5%);
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
    align-items: center;
    background-color: #0000ff;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
`;

export const NextSection = styled(Link)`
    color: #fff;
    font-size: 1.15rem;
    margin-top: 30px;
    text-decoration: none;
    transition: transform 0.25s linear;

    &:hover { 
        transform: scale(1.1); 
    }

    /* Portrait Breakpoints -------------------- */

    /* Breakpoint (Small) */
    @media screen and (min-width: 576px) {
        font-size: 1.75rem;
    }

    /* Breakpoint (Medium) */
    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }

    /* Breakpoint (Large) */
    @media screen and (min-width: 992px) {
        font-size: 2.75rem;
    }

    /* Landscape Breakpoints -------------------- */

    /* Landscape Breakpoint (Small) */
    @media screen and (min-width: 576px) and (orientation: landscape) {
        font-size: 1rem;
    }

    /* Landscape Breakpoint (Medium) */
    @media screen and (min-width: 768px) and (orientation: landscape) {
        font-size: 1.2rem;
    }

    /* Landscape Breakpoint (Large) */
    @media screen and (min-width: 992px) and (orientation: landscape) {
        font-size: 1.75rem;
    }

    /* Landscape Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) and (orientation: landscape) {
        font-size: 2.25rem;
    }

    /* Landscape Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) and (orientation: landscape) {
        font-size: 2.5rem;
    }
`;