import styled from "styled-components";

export const NavigationBarContainer = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 255, 0.5);
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 20px;
    position: fixed;
    width: 100vw;
    z-index: 2;
`;

const BaseLogoContainer = styled.div`
    align-items: center;
    cursor: default;
    display: flex;
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
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

export const NavigationBarLinksContainer = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 350px;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            color: #ebebeb;
            text-decoration: underline #ebebeb;
        }
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const NavigationMenuContainer = styled.nav`
    align-items: center;
    background-color: #0000ff;
    color: #fff;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    width: 100%;
    z-index: 1;

    ul {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        height: 85%;
        justify-content: center;
        list-style: none;
        padding: 0;
        text-align: left;

        li {
            margin: 1rem 0;

            a {
                color: #fff;
                text-decoration: none;

                &:hover {
                    color: #ebebeb;
                    text-decoration: underline #ebebeb;
                }
            }
        }

        @media screen and (orientation: landscape) {
            align-items: center;
            column-gap: 50px;
            display: grid;
            height: 70%;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr 1fr;
        }
    }

    &.active {
        transform: translateX(0);
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;