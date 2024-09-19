import styled from "styled-components";

export const RecoveryContainer = styled.div`
    align-items: center;
    background-color: var(--bg-color-recovery);
    color: var(--text-color-black);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;

    ::selection {
        background-color: var(--selection-color-recovery);
        color: var(--text-selected-color-white);
    }

    a {
        color: var(--text-color-black);
    }
`;