import styled from "styled-components";

export const StyledRunning = styled.svg`
    transition: transform 0.75s;
    &:hover {
        transform: rotate(15deg);
    }

    /* Icon will not tilt if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            transform: none;
        }
    }
`;