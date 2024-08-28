import React, { PropsWithChildren } from "react";

import { ParagraphContainer, LeadParagraphContainer } from "./paragraph.styles";

// Accepted values for the paragraphType prop are specified here
export enum PARAGRAPH_TYPE_CLASSES {
    regular = 'regular',
    lead = 'lead'
};

// Paragraph styling changes depending on the value of the paragraphType prop
const getParagraph = (paragraphType: PARAGRAPH_TYPE_CLASSES): 
    typeof ParagraphContainer | typeof LeadParagraphContainer => 
({
    [PARAGRAPH_TYPE_CLASSES.regular]: ParagraphContainer,
    [PARAGRAPH_TYPE_CLASSES.lead]: LeadParagraphContainer
}[paragraphType]);

// Component prop is created here
export type ParagraphProps = {
    paragraphType: PARAGRAPH_TYPE_CLASSES;
};

const Paragraph: React.FC<PropsWithChildren<ParagraphProps>> = ({ children, paragraphType }) => {
    const CustomParagraph = getParagraph(paragraphType);
    return (
        <CustomParagraph>{ children }</CustomParagraph>
    );
};

export default Paragraph;