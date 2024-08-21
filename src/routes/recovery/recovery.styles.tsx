import styled from "styled-components";

import { Card } from "../../components/card/card.styles";
import { Link } from "react-router-dom";

export const RecoveryContainer = styled.div`
    align-items: center;
    background-color: #bbbdf6;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export const RecoveryCard = styled(Card)`
    background-color: #ededfd;
    color: #000;

    ::selection {
        background-color: #800080;
        color: #fff;
    }
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