import styled from "styled-components";

export const PrimaryHeader = styled.h1`
    display: flex;
    align-items: center;

    svg {
        height: 27px;
        width: 27px;
    }

    /* Portrait Breakpoints -------------------- */

    /* Breakpoint (Small) */
    @media screen and (min-width: 576px) and (orientation: portrait) {
        font-size: 3.72rem;

        svg {
            height: 50px;
            width: 50px;
        }
    }

    /* Breakpoint (Medium) */
    @media screen and (min-width: 768px) and (orientation: portrait) {
        font-size: 4.25rem;

        svg {
            height: 56px;
            width: 56px;
        }
    }

    /* Breakpoint (Large) */
    @media screen and (min-width: 992px) and (orientation: portrait) {
        font-size: 5.84rem;

        svg {
            height: 78px;
            width: 78px;
        }
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
        font-size: 2.13rem;
    }

    /* Landscape Breakpoint (Medium) */
    @media screen and (min-width: 768px) and (orientation: landscape) {
        font-size: 2.55rem;

        svg {
            height: 32px;
            width: 32px;
        }
    }

    /* Landscape Breakpoint (Large) */
    @media screen and (min-width: 992px) and (orientation: landscape) {
        font-size: 3.72rem;

        svg {
            height: 50px;
            width: 50px;
        }
    }

    /* Landscape Breakpoint (Extra Large) */
    @media screen and (min-width: 1200px) and (orientation: landscape) {
        font-size: 4.78rem;

        svg {
            height: 64px;
            width: 64px;
        }
    }

    /* Landscape Breakpoint (Extra Extra Large) */
    @media screen and (min-width: 1400px) and (orientation: landscape) {
        font-size: 5.31rem;

        svg {
            height: 70px;
            width: 70px;
        }
    }
`;

export const SecondaryHeader = styled.h2`
    display: flex;
    align-items: center;

    svg {
        height: 24px;
        width: 24px;
    }
`;

export const TertiaryHeader = styled.h3`
    display: flex;
    align-items: center;

    svg {
        height: 24px;
        width: 24px;
    }
`;