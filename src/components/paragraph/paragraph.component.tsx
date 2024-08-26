import React, { PropsWithChildren } from "react";

import { ParagraphContainer } from "./paragraph.styles";

const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ParagraphContainer>{ children }</ParagraphContainer>
    );
};

export default Paragraph;