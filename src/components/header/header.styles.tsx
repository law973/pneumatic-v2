import styled from "styled-components";

export const PrimaryHeader = styled.h1`
    align-items: center;
    display: flex;
    font-size: 1.5rem;

    svg {
        height: 27px;
        width: 27px;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 2.125rem;
    }
`;

export const SecondaryHeader = styled.h2`
    align-items: center;
    display: flex;

    svg {
        height: 20px;
        width: 20px;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Large) */
    @media screen and (min-width: 992px) {
        /* font-size: 1.27rem; */
    }

    /* Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) {
        
    }

    /* Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) {
        
    }
`;

export const TertiaryHeader = styled.h3`
    align-items: center;
    display: flex;

    svg {
        height: 18px;
        width: 18px;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Large) */
    @media screen and (min-width: 992px) {
        
    }

    /* Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) {
        
    }

    /* Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) {
        
    }
`;