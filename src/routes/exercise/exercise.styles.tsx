import styled from "styled-components";

export const ExerciseContainer = styled.div`
    align-items: center;
    background-color: var(--bg-color-exercise);
    color: var(--text-color-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding-bottom: 30px;
    padding-top: 75px;

    ::selection {
        background-color: var(--selection-color-exercise);
        color: var(--text-selected-color-black);
    }

    a {
        color: var(--text-color-white);
    }
`;