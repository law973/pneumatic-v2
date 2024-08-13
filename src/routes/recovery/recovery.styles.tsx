import styled from "styled-components";

import { Card } from "../../components/card/card.styles";

export const RecoveryContainer = styled.div`
    background-color: #bbbdf6;
`;

export const RecoveryCard = styled(Card)`
    background-color: #ededfd;
    color: #000;

    ::selection {
        background-color: #800080;
        color: #fff;
    }
`;