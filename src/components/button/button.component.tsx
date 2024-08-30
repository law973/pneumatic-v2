import { PropsWithChildren, ButtonHTMLAttributes } from "react";

import { ArrowButton, ToolsButton } from "./button.styles";

// Accepted values for the buttonType prop are specified here
export enum BUTTON_TYPE_CLASSES {
    arrow = 'arrow',
    tools = 'tools'
};

// Button styling changes depending on the value of the buttonType prop
const getButton = (buttonType: BUTTON_TYPE_CLASSES):
    typeof ArrowButton  | typeof ToolsButton =>
({
    [BUTTON_TYPE_CLASSES.arrow]: ArrowButton,
    [BUTTON_TYPE_CLASSES.tools]: ToolsButton
}[buttonType]);

export type ButtonProps = {
    buttonType: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;