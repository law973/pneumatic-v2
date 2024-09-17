import styled from "styled-components";

export const StyledBed = styled.svg`
    opacity: 1;

    &:hover {
        animation: dozeOff 1s linear;
    }

    @keyframes dozeOff {
        40% { opacity: 0; }
        60% { opacity: 0; }
    }

    /* Icon will not scale if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;