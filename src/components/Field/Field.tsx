import React, { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import "./Field.scss";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors: FieldError | undefined;
  register: UseFormRegister<any>;
  name: string;
  variant: "primary" | "secondary";
}

const Field: React.FC<FieldProps> = ({
  label,
  errors,
  register,
  name,
  variant,
  ...props
}) => {
  return (
    <p className={props.className}>
      <label>{label}</label>
      <input
        className={`${variant} ${errors ? "active" : ""}`}
        {...register(name)}
        type="text"
        name={name}
        placeholder={props.placeholder}
      />
      <div className={errors ? "error" : ""}>
        {errors?.message ? errors?.message : null}
      </div>
    </p>
  );
};

export default Field;
