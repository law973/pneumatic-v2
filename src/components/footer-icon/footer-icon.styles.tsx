import styled from "styled-components";

export const FooterIconContainer = styled.a`
    display: inline-block;
    height: 3.125rem;
    width: 3.125rem;

    svg {
        fill: var(--footer-icon-color);
        transition: fill 0.25s linear, transform 0.25s linear;
        
        &:hover {
            fill: var(--footer-icon-color-hover);
            transform: scale(1.1); 
        }
    }
`;