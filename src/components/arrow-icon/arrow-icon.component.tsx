import React from "react";
import { ArrowIconContainer } from "./arrow-icon.styles";

type ArrowIconProps = {
    title: string;
    icon: React.ReactNode;
};

const ArrowIcon = ({ title, icon }: ArrowIconProps) => {
    return (
        <ArrowIconContainer title={title}>
            {icon}
        </ArrowIconContainer>
    );
};

export default ArrowIcon;