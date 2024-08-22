import styled from "styled-components";

export const FooterIconContainer = styled.a`
    display: inline-block;
    height: 50px;
    width: 50px;

    svg {
        fill: #fff;
        transition: transform 0.25s linear;
        
        &:hover { 
            transform: scale(1.1); 
        }
    }
`;