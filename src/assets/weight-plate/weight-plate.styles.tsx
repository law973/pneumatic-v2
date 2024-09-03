import styled from "styled-components";

export const StyledWeightPlate = styled.svg`
    &:hover {
        animation: plateBounce 1s ease;
    }

    @keyframes plateBounce {
        20% { transform:translateY(0%); }
        40% { transform:translateY(-15%); }
        60% { transform:translateY(0%); }
        70% { transform:translateY(-7%); }
        74% { transform:translateY(0%); }
        78% { transform:translateY(-3%); }
        80% { transform:translateY(0); }
    }

    /* Icon will not translate if reduced motion is preferred */
    @media (prefers-reduced-motion: reduce) {
        &:hover {
            animation: none;
        }
    }
`;