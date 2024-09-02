import styled from "styled-components";

import { Link } from "react-router-dom";

export const SectionLink = styled(Link)`
    font-size: 1rem;
    margin-top: 30px;
    text-decoration: none;
    transition: transform 0.25s linear;

    &:hover { 
        text-decoration: underline;
    }

    /* Portrait Breakpoints -------------------- */

    /* Landscape Breakpoints -------------------- */
`;