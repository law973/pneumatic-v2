import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    align-items: center;
    background-color: rgba(0, 0, 255, 0.5);
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 20px;
    position: fixed;
    top: -50px;
    transition: top 0.3s;
    width: 100vw;
    z-index: 2;

    &.active {
        top: 0px;
    }
`;

const BaseLogoContainer = styled(Link)`
    color: #fff;
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
    text-decoration: none;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;

    &:hover:not(:active) {
        transform: scale(0.975);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const SmallLogoContainer = styled(BaseLogoContainer)`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const LargeLogoContainer = styled(BaseLogoContainer)`
    @media screen and (max-width: 767.98px) {
        display: none;
    }
`;

export const NavigationBarContainer = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 600px;
`;

export const NavigationBarLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;

    @media screen and (max-width: 767.98px) {
        display: none;
    }
`;

export const NavigationBarLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover, &:active {
        color: #ebebeb;
        text-decoration: underline #ebebeb;
    }

    &:active {
        transform: translateY(0.1rem);
    }
`;

export const SignInLink = styled(NavigationBarLink)`
    @media screen and (max-width: 767.98px) {
        display: none;
    }
`;