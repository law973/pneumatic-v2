import React, { PropsWithChildren } from "react";

import {
    PrimaryHeader,
    SecondaryHeader,
    TertiaryHeader
} from './header.styles';

// Accepted values for the headerType prop are specified here 
export enum HEADER_TYPE_CLASSES {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary'
};

// Header styling changes depending on the value of the headerType prop
const getHeader = (headerType: HEADER_TYPE_CLASSES):
    typeof PrimaryHeader | typeof SecondaryHeader | typeof TertiaryHeader =>
({
    [HEADER_TYPE_CLASSES.primary]: PrimaryHeader,
    [HEADER_TYPE_CLASSES.secondary]: SecondaryHeader,
    [HEADER_TYPE_CLASSES.tertiary]: TertiaryHeader
}[headerType]);

// Component prop is created here
export type HeaderProps = {
    headerType: HEADER_TYPE_CLASSES;
};

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({ children, headerType }) => {
    const CustomHeader = getHeader(headerType);
    return <CustomHeader>{ children }</CustomHeader>;
};

export default Header;