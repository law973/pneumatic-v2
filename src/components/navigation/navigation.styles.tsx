import styled from "styled-components";

export const NavigationContainer = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 255, 0.5);
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 20px;
    position: fixed;
    width: 100vw;
    z-index: 1;
`;

const BaseLogoContainer = styled.div`
    align-items: center;
    cursor: default;
    display: flex;
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
`;

export const SmallLogoContainer = styled(BaseLogoContainer)`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const LargeLogoContainer = styled(BaseLogoContainer)`
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const NavigationLinksContainer = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 350px;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`;