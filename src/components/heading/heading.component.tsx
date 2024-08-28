import React, { PropsWithChildren } from "react";

import {
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    DisplayHeadingOne
} from './heading.styles';

// Accepted values for the headerType prop are specified here 
export enum HEADING_TYPE_CLASSES {
    headingOne = 'headingOne',
    headingTwo = 'headingTwo',
    headingThree = 'headingThree',
    displayHeadingOne = 'displayHeadingOne'
};

// Header styling changes depending on the value of the headerType prop
const getHeading = (headingType: HEADING_TYPE_CLASSES):
    typeof HeadingOne | typeof HeadingTwo | typeof HeadingThree =>
({
    [HEADING_TYPE_CLASSES.headingOne]: HeadingOne,
    [HEADING_TYPE_CLASSES.headingTwo]: HeadingTwo,
    [HEADING_TYPE_CLASSES.headingThree]: HeadingThree,
    [HEADING_TYPE_CLASSES.displayHeadingOne]: DisplayHeadingOne
}[headingType]);

// Component prop is created here
export type HeadingProps = {
    headingType: HEADING_TYPE_CLASSES;
};

const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({ children, headingType }) => {
    const CustomHeading = getHeading(headingType);
    return <CustomHeading>{ children }</CustomHeading>;
};

export default Heading;