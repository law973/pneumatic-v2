import styled from "styled-components";

export const DietContainer = styled.div`
    align-items: center;
    background-color: var(--bg-color-diet);
    color: var(--text-color-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding-bottom: 30px;
    padding-top: 75px;

    ::selection {
        background-color: var(--selection-color-diet);
        color: var(--text-selected-color-white);
    }

    a {
        color: var(--text-color-black);
    }
`;