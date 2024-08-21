import styled from "styled-components";

import { Card } from "../../components/card/card.styles";
import { Link } from "react-router-dom";

export const ExerciseContainer = styled.div`
    align-items: center;
    background-color: #880d1e;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export const ExerciseCard = styled(Card)`
    background-color: #5d0914;
    color: #fff;

    ::selection {
        background-color: #f08080;
        color: #000;
    }
`;

export const NextSectionRecovery = styled(Link)`
    color: #fff;
    margin-top: 50px;
    text-decoration: none;
    transition: transform 0.25s linear;

    &:hover { 
        transform: scale(1.1); 
    }
`;