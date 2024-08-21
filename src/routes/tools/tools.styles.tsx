import styled from "styled-components";

import { Card } from "../../components/card/card.styles";
import { Link } from "react-router-dom";

export const ToolsContainer = styled.div`
    align-items: center;
    background-color: #fec601;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export const ToolsCard = styled(Card)`
    background-color: #fee485;
    color: #000;

    ::selection {
        background-color: #b8860b;
        color: #fff;
    }
`;

export const NextSectionShop = styled(Link)`
    color: #000;
    margin-top: 50px;
    text-decoration: none;
    transition: transform 0.25s linear;

    &:hover { 
        transform: scale(1.1); 
    }
`;