import styled from "styled-components";

export const StyledProgressive = styled.svg`
    transition: transform 1s;

    &:hover {
        transform: translate(10%, -10%);
    }

    /* Icon will not translate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            transform: none;
        }
    }
`;