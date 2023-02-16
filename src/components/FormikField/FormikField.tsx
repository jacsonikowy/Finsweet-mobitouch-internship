import React from "react";
import { useField } from "formik";

interface FormikFieldProps {
  name: string;
  label?: string;
  textarea?: boolean;
  placeholder?: string;
  id: string;
  className?: string;
}

const FormikField: React.FC<FormikFieldProps> = ({
  name,
  label,
  textarea,
  className,
  ...props
}) => {
  const [field, meta] = useField({ name, ...props });

  return (
    <p className={`${textarea === true ? "message" : null}`}>
      <label htmlFor={name}>{label}</label>
      {textarea === false ? (
        <input
          className={`form-field ${className} ${meta.error ? "active" : ""}`}
          {...field}
          {...props}
        />
      ) : (
        <textarea
          className={`textarea-field form-field ${meta.error ? "active" : ""}`}
        ></textarea>
      )}
      {meta.error ? <div className="error">{meta.error}</div> : null}
    </p>
  );
};

export default FormikField;
