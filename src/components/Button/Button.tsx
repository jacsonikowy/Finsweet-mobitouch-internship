import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant:
    | "primary"
    | "secondary"
    | "arrowPrimary"
    | "arrowSecondary"
    | "black"
    | "withoutBackground"
    | "yellow";
    withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text,
    variant,
    withArrow,
    ...props
}) => {
    return (
        <button {...props} className={`button ${variant} `}>
            {text}
            {withArrow ? "→" : ""}
        </button>
    );
};

export default Button;
