import React, { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import "./FieldTextarea.scss";

interface FieldTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errors: FieldError | undefined;
  register: UseFormRegister<any>;
  name: string;
}

const FieldTextArea: React.FC<FieldTextAreaProps> = ({
  label,
  errors,
  register,
  name,
  ...props
}) => {
  return (
    <p className={props.className}>
      <label htmlFor={name}>{label}</label>
      <textarea
        className={errors ? "active" : ""}
        id={props.id}
        {...register(name)}
      ></textarea>
      <div className={errors ? "error" : ""}>
        {errors?.message ? errors?.message : null}
      </div>
    </p>
  );
};

export default FieldTextArea;
