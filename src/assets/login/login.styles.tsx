import styled from "styled-components";

export const StyledLogin = styled.svg`
    transition: transform 1s;

    &:hover {
        transform: translateX(10%);
    }

    /* Icon will not translate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            transform: none;
        }
    }
`;