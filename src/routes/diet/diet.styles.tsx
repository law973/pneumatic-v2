import styled from "styled-components";

import { Link } from "react-router-dom";

export const DietContainer = styled.div`
    align-items: center;
    background-color: #06d6a0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
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