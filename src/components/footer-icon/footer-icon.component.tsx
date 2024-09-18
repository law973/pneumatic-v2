import React from "react";
import { FooterIconContainer } from "./footer-icon.styles";
import { ScreenReaderOnly } from "../../global.styles";

type FooterIconProps = {
    href: string;
    title: string;
    icon: React.ReactNode;
};

const FooterIcon = ({ href, title, icon }: FooterIconProps) => {
    return (
        <FooterIconContainer rel="noreferrer" href={href} target="_blank" title={title}>
            <ScreenReaderOnly>(Opens in a new tab)</ScreenReaderOnly>
            {icon}
        </FooterIconContainer>
    );
};

export default FooterIcon;