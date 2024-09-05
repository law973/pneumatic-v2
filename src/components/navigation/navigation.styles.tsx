import styled from "styled-components";

export const NavigationContainer = styled.div`
    background-color: #0000ff;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 20px;;
    position: fixed;
    width: 100vw;
    z-index: 1;
`;

export const NavigationLogoContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
`;

export const NavigationLinksContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 350px;

    a {
        color: #fff;
        text-decoration: none;
    }
`;