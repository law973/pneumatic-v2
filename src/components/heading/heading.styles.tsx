import styled from "styled-components";

export const HeadingOne = styled.h1`
    align-items: center;
    display: flex;
    font-size: 1.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 2.125rem;

        svg {
            height: 2.125rem;
            width: 2.125rem;
        }
    }
`;

export const HeadingTwo = styled.h2`
    align-items: center;
    display: flex;
    font-size: 1.125rem;

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 1.5rem;

        svg {
            height: 1.5rem;
            width: 1.5rem;
        }
    }

    /* Breakpoint (Desktop Size) */
    @media screen and (min-width: 992px) {
        font-size: 1.875rem;

        svg {
            height: 1.875rem;
            width: 1.875rem;
        }
    }
`;

export const HeadingThree = styled.h3`
    align-items: center;
    display: flex;
    font-size: 1.125rem;

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 1.25rem;

        svg {
            height: 1.25rem;
            width: 1.25rem;
        }
    }

    /* Breakpoint (Desktop Size) */
    @media screen and (min-width: 992px) {
        font-size: 1.5rem;

        svg {
            height: 1.5rem;
            width: 1.5rem;
        }
    }
`;

export const DisplayHeadingOne = styled.h1`
    align-items: center;
    display: flex;
    font-size: 1.875rem;

    svg {
        height: 1.875rem;
        width: 1.875rem;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 3.125rem;

        svg {
            height: 3.125rem;
            width: 3.125rem;
        }
    }

    /* Breakpoint (Desktop Size) */
    @media screen and (min-width: 992px) {
        font-size: 3.75rem;

        svg {
            height: 3.75rem;
            width: 3.75rem;
        }
    }
`;