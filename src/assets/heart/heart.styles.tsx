import styled from "styled-components";

export const StyledHeart = styled.svg`
    &:hover {
        animation: heartBeat 0.5s linear;
    }

    @keyframes heartBeat {
        50% { transform: scale(1.1); }
    }

    /* Icon will not scale if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;