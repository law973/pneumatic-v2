import styled from "styled-components";

export const StyledClock = styled.svg`
    
    &:hover {
        animation: alarmGoingOff 0.5s 2;
    }

    @keyframes alarmGoingOff {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

    /* Icon will not translate or rotate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;