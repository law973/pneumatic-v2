import styled from "styled-components";

export const StyledPieChart = styled.svg`
    transition: transform 1s;

    &:hover {
        transform: rotate(180deg);
    }

    /* Icon will not rotate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            transform: none;
        }
    }
`;