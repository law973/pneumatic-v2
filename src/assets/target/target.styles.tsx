import styled from "styled-components";

export const StyledTarget = styled.svg`

    &:hover {
        animation: targetHit 1s;
    }

    @keyframes targetHit {
        100% { transform: rotateY(360deg); }
    }

    /* Icon will not rotate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;