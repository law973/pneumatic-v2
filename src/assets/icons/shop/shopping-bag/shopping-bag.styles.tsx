import styled from "styled-components";

export const StyledShoppingBag = styled.svg`
    transition: transform 1s;

    &:hover {
        transform: translateY(-10%);
    }

    /* Icon will not translate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            transform: none;
        }
    }
`;