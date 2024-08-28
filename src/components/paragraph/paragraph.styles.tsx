import styled from "styled-components";

export const ParagraphContainer = styled.p`
    font-size: 1rem;
    max-width: 75ch;
    text-align: left;
`;

export const LeadParagraphContainer = styled(ParagraphContainer)`
    /* Breakpoints -------------------- */

    /* Breakpoint (Tablet Size) */
    @media screen and (min-width: 768px) {
        font-size: 1.125rem;
    }

    /* Breakpoint (Desktop Size) */
    @media screen and (min-width: 992px) {
        font-size: 1.25rem;
    }
`;