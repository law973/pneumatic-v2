import styled from "styled-components";

export const ParagraphContainer = styled.p`
    font-size: 1.15rem;
    max-width: 75ch;
    text-align: left;

    /* Portrait Breakpoints -------------------- */

    /* Breakpoint (Small) */
    @media screen and (min-width: 576px) and (orientation: portrait) {
        font-size: 1.75rem;
    }

    /* Breakpoint (Medium) */
    @media screen and (min-width: 768px) and (orientation: portrait) {
        font-size: 2rem;
    }

    /* Breakpoint (Large) */
    @media screen and (min-width: 992px) and (orientation: portrait) {
        font-size: 2.75rem;
    }

    /* Breakpoint (Extra Large) and (orientation: portrait) */
    /* @media screen and (min-width: 1200px) {
        font-size:
    } */

    /* Breakpoint (Extra Extra Large) and (orientation: portrait) */
    /* @media screen and (min-width: 1400px) {
        font-size:
    } */

    /* Landscape Breakpoints -------------------- */

    /* Landscape Breakpoint (Small) */
    @media screen and (min-width: 576px) and (orientation: landscape) {
        font-size: 1rem;
    }

    /* Landscape Breakpoint (Medium) */
    @media screen and (min-width: 768px) and (orientation: landscape) {
        font-size: 1.2rem;
    }

    /* Landscape Breakpoint (Large) */
    @media screen and (min-width: 992px) and (orientation: landscape) {
        font-size: 1.75rem;
    }

    /* Landscape Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) and (orientation: landscape) {
        font-size: 2.25rem;
    }

    /* Landscape Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) and (orientation: landscape) {
        font-size: 2.5rem;
    }
`;