import styled from "styled-components";

export const StyledCutlery = styled.svg`

    &:hover {
        animation: usingCutlery 1.25s linear;
    }

    @keyframes usingCutlery {
        33% { transform: translateY(0) rotateX(180deg); }
        50% { transform: rotateX(180deg) translateY(-10%); }
        66% { transform: rotateX(180deg) translateY(0); }
    }

    /* Icon will not translate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;