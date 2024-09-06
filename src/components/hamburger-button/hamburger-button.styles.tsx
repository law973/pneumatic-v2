import styled from "styled-components";

export const HamburgerButtonContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 2rem;
    justify-content: space-around;
    width: 2rem;
    z-index: 10;

    div {
        background-color: #fff;
        height: 0.25rem;
        transition: all 0.3s ease-in-out;
    }

    &:hover div {
        background-color: #ebebeb;
    }

    &.active {
        :nth-child(1) {
            transform: translateY(0.6rem) rotate(-45deg);
        }

        :nth-child(2) {
            opacity: 0;
        }

        :nth-child(3) {
            transform: translateY(-0.75rem) rotate(45deg);
        }
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;