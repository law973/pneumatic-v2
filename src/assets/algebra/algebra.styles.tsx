import styled from "styled-components";

export const StyledAlgebra = styled.svg`
    &:hover {
        animation: rotateSymbols 1.25s ease-in-out;
    }

    @keyframes rotateSymbols {
        70% { transform: rotate(405deg); }
        80% { transform: rotate(405deg); }
        100% { transform: rotate(360deg); }
    }

    /* Icon will not rotate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;