import styled from "styled-components";

import { Link } from "react-router-dom";

export const RecoveryContainer = styled.div`
    align-items: center;
    background-color: #bbbdf6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
`;

export const NextSectionTools = styled(Link)`
    color: #000;
    margin-top: 50px;
    text-decoration: none;
    transition: transform 0.25s linear;

    &:hover { 
        transform: scale(1.1); 
    }
`;