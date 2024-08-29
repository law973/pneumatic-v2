import styled from "styled-components";

export const HeadingOne = styled.h1`
    align-items: center;
    display: flex;
    font-size: 1.5rem;

    svg {
        height: 24px;
        width: 24px;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 2.125rem;

        svg {
            height: 30px;
            width: 30px;
        }
    }
`;

export const HeadingTwo = styled.h2`
    align-items: center;
    display: flex;
    font-size: 1.125rem;

    svg {
        height: 18px;
        width: 18px;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 1.5rem;

        svg {
            height: 24px;
            width: 24px;
        }
    }

    /* Breakpoint (Desktop Size) */
    @media screen and (min-width: 992px) {
        font-size: 1.875rem;

        svg {
            height: 28px;
            width: 28px;
        }
    }
`;

export const HeadingThree = styled.h3`
    align-items: center;
    display: flex;
    font-size: 1.125rem;

    svg {
        height: 18px;
        width: 18px;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 1.25rem;

        svg {
            height: 20px;
            width: 20px;
        }
    }

    /* Breakpoint (Desktop Size) */
    @media screen and (min-width: 992px) {
        font-size: 1.5rem;

        svg {
            height: 24px;
            width: 24px;
        }
    }
`;

export const DisplayHeadingOne = styled.h1`
    align-items: center;
    display: flex;
    font-size: 1.875rem;

    svg {
        height: 28px;
        width: 28px;
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 3.125rem;

        svg {
            height: 40px;
            width: 40px;
        }
    }

    /* Breakpoint (Desktop Size) */
    @media screen and (min-width: 992px) {
        font-size: 3.75rem;

        svg {
            height: 50px;
            width: 50px;
        }
    }
`;