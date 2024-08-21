import styled from "styled-components";

import { Card } from "../../components/card/card.styles";

export const ShopContainer = styled.section`
    align-items: center;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export const ShopCard = styled(Card)`
    background-color: #fff;
    color: #000;

    ::selection {
        background-color: #000;
        color: #fff;
    }
`;