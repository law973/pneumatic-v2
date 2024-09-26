import styled from "styled-components";

export const HeadingOne = styled.h1`
    align-items: center;
    display: flex;
    font-size: clamp(1.5rem, 4.42vw, 2.125rem);

    svg {
        height: clamp(1.5rem, 4.42vw, 2.125rem);
        width: clamp(1.5rem, 4.42vw, 2.125rem);
    }
`;

export const HeadingTwo = styled.h2`
    align-items: center;
    display: flex;
    font-size: clamp(1.125rem, 3.12vw, 1.5rem);

    svg {
        height: clamp(1.125rem, 3.12vw, 1.5rem);
        width: clamp(1.125rem, 3.12vw, 1.5rem);
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Medium, Tablet) */
    @media screen and (min-width: 768px) {
        font-size: clamp(1.5rem, 3.02vw, 1.875rem);

        svg {
            height: clamp(1.5rem, 3.02vw, 1.875rem);
            width: clamp(1.5rem, 3.02vw, 1.875rem);
        }
    }
`;

export const HeadingThree = styled.h3`
    align-items: center;
    display: flex;
    font-size: clamp(1.125rem, 2.6vw, 1.25rem);

    svg {
        height: clamp(1.125rem, 2.6vw, 1.25rem);
        width: clamp(1.125rem, 2.6vw, 1.25rem);
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Medium, Tablet) */
    @media screen and (min-width: 768px) {
        font-size: clamp(1.25rem, 2.41vw, 1.5rem);

        svg {
            height: clamp(1.25rem, 2.41vw, 1.5rem);
            width: clamp(1.25rem, 2.41vw, 1.5rem);
        }
    }
`;

export const DisplayHeadingOne = styled.h1`
    align-items: center;
    display: flex;
    font-size: clamp(1.875rem, 6.51vw, 3.125rem);

    svg {
        height: clamp(1.875rem, 6.51vw, 3.125rem);
        width: clamp(1.875rem, 6.51vw, 3.125rem);
    }

    /* Breakpoints -------------------- */

    /* Breakpoint (Medium, Tablet) */
    @media screen and (min-width: 768px) {
        font-size: clamp(3.125rem, 6.04vw, 3.75rem);

        svg {
            height: clamp(3.125rem, 6.04vw, 3.75rem);
            width: clamp(3.125rem, 6.04vw, 3.75rem);
        }
    }
`;