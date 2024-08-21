import styled from "styled-components";

import { Card } from "../../components/card/card.styles";
import { Link } from "react-router-dom";

export const DietContainer = styled.div`
    align-items: center;
    background-color: #06d6a0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export const DietCard = styled(Card)`
    background-color: #9cfce3;
    color: #000;

    ::selection {
        background-color: #006400;
        color: #fff;
    }
`;

export const NextSectionExercise = styled(Link)`
    color: #000;
    margin-top: 50px;
    text-decoration: none;
    transition: transform 0.25s linear;

    &:hover { 
        transform: scale(1.1); 
    }
`;