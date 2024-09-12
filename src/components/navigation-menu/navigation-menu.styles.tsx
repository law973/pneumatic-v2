import styled from "styled-components";

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

                &:hover, &:active {
                    color: #ebebeb;
                    text-decoration: underline #ebebeb;
                }

                &:active {
                    transform: translateY(0.1rem);
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