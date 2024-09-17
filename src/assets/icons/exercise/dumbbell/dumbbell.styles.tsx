import styled from "styled-components";

export const StyledDumbbell = styled.svg`
    &:hover {
        animation: oneRep 1s;
    }

    @keyframes oneRep {
        25% { transform: rotate(45deg); }
        50% { transform: rotate(45deg) translate(-10%, -10%); }
        75% { transform: rotate(45deg) translate(0%, 0%); }
    }

    /* Icon will not rotate or translate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;