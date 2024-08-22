import styled from "styled-components";

import { Link } from "react-router-dom";

export const ExerciseContainer = styled.div`
    align-items: center;
    background-color: #880d1e;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
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