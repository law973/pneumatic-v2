import styled from "styled-components";

export const StyledHammer = styled.svg`
    
    &:hover {
        animation: usingTools 1s;
    }

    @keyframes usingTools {
        10% { transform: translateY(-10%); }
        20% { transform: translateY(-10%) rotate(-30deg); }
        40% { transform: translateY(-10%) rotate(0); }
        60% { transform: translateY(-10%) rotate(0); }
        80% { transform: translateY(-10%) rotate(30deg); }
        90% { transform: translateY(-10%); }
    }

    /* Icon will not translate or rotate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;