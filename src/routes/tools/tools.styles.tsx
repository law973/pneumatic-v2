import styled from "styled-components";

import { Card } from "../../components/card/card.styles";

export const ToolsContainer = styled.div`
    background-color: #fec601;
`;

export const ToolsCard = styled(Card)`
    background-color: #fee485;
    color: #000;

    ::selection {
        background-color: #b8860b;
        color: #fff;
    }
`;