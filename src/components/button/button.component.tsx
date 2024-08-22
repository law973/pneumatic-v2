import { PropsWithChildren, ButtonHTMLAttributes } from "react";

import { StyledButton } from "./button.styles";

export type ButtonProps = {

} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, ...otherProps }) => {
    return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;