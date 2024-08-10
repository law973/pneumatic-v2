import React from "react";
import { FooterIconContainer } from "./footer-icon.styles";

type FooterIconProps = {
    href: string;
    title: string;
    icon: React.ReactNode;
};

const FooterIcon = ({ href, title, icon }: FooterIconProps) => {
    return (
        <FooterIconContainer rel="noreferrer" href={href} target="_blank" title={title}>
            {icon}
        </FooterIconContainer>
    );
};

export default FooterIcon;