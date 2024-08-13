import styled from "styled-components";

import { Card } from "../../components/card/card.styles";

export const DietContainer = styled.div`
    background-color: #06d6a0;
`;

export const DietCard = styled(Card)`
    background-color: #9cfce3;
    color: #000;

    ::selection {
        background-color: #006400;
        color: #fff;
    }
`;