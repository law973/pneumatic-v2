import styled from "styled-components";

import { Card } from "../../components/card/card.styles";

export const ExerciseContainer = styled.div`
    background-color: #880d1e;
`;

export const ExerciseCard = styled(Card)`
    background-color: #5d0914;
    color: #fff;

    ::selection {
        background-color: #f08080;
        color: #000;
    }
`;