import styled from "styled-components";

export const StyledFlame = styled.svg`
    
    &:hover {
        animation: flameEruption 1.5s ease-in;
    }

    @keyframes flameEruption {
        25% { transform: rotateY(180deg); }
        50% { transform: rotateY(0) scale(1.1); }
        75% { transform: rotateY(180deg); }
    }

    /* Icon will not rotate or scale if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;