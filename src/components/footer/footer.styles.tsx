import styled from "styled-components";

export const FooterContainer = styled.footer`
    align-items: center;
    background-color: var(--bg-color-footer);
    color: var(--text-color-white);
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;

    ::selection {
        background-color: var(--selection-color-footer);
        color: var(--text-selected-color-black);
    }
`;

export const FooterIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 150px;
`;