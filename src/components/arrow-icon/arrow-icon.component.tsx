import React from "react";
import { ArrowIconContainer } from "./arrow-icon.styles";

type ArrowIconProps = {
    href: string;
    title: string;
    icon: React.ReactNode;
};

const ArrowIcon = ({ href, title, icon }: ArrowIconProps) => {
    return (
        <ArrowIconContainer href={href} title={title}>
            {icon}
        </ArrowIconContainer>
    );
};

export default ArrowIcon;