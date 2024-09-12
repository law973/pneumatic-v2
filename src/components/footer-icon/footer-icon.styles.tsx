import styled from "styled-components";

export const FooterIconContainer = styled.a`
    display: inline-block;
    height: 50px;
    width: 50px;

    svg {
        fill: #fff;
        transition: fill 0.25s linear, transform 0.25s linear;
        
        &:hover { 
            fill: #ebebeb;
            transform: scale(1.1); 
        }
    }
`;