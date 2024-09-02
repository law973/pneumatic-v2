import styled from "styled-components";

export const StyledProgressive = styled.svg`
    &:hover {
        animation: makingProgress 1s;
    }

    @keyframes makingProgress {
        50% { transform: translate(10%, -10%); }
    }

    /* Icon will not translate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;