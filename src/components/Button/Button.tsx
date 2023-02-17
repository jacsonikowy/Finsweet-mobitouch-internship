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
  className,
  ...props
}) => {
  return (
    <button className={`button ${variant} ${className} `}>
      {text}
      {withArrow ? "→" : ""}
    </button>
  );
};

export default Button;
