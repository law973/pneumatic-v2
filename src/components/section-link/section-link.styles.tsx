import styled from "styled-components";

import { Link } from "react-router-dom";

const BaseSectionLink = styled(Link)`
    font-size: 1rem;
    margin-top: 30px;
    text-decoration: none;
    transition: transform 0.25s linear;

    &:hover { 
        transform: scale(1.1); 
    }

    /* Portrait Breakpoints -------------------- */

    /* Landscape Breakpoints -------------------- */
`;

export const WhiteSectionLink = styled(BaseSectionLink)`
    color: #fff;
`;

export const BlackSectionLink = styled(BaseSectionLink)`
    color: #000;
`;