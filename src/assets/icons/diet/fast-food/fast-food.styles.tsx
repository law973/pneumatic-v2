import styled from "styled-components";

export const StyledFastFood = styled.svg`
    
    &:hover {
        animation: notAllowed 0.5s linear;
    }

    @keyframes notAllowed {
        25% { transform: translateX(-10%); }
        75% { transform: translateX(10%); }
    }

    /* Icon will not translate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;