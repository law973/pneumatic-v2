import styled from "styled-components";

export const HamburgerButtonContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 2rem;
    justify-content: space-around;
    right: 20px;
    position: fixed;
    top: 10px;
    width: 2rem;
    z-index: 10;

    div {
        background-color: #fff;
        height: 0.25rem;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;