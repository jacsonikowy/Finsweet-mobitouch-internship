import React from "react";
import "./FormStellar.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Field from "../../../../components/Field/Field";

import Button from "../../../../components/Button/Button";

interface FormsData {
  name: string;
  email: string;
  figmaURL: string;
}

const FormStellar: React.FC = () => {
  const schemaValidation = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    figmaURL: yup.string().url("Invalid URL").required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormsData>({
    resolver: yupResolver(schemaValidation),
  });
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <Field
        id="name"
        placeholder="Your Name"
        name="name"
        errors={errors.name}
        register={register}
        variant="secondary"
      />
      <Field
        id="email"
        placeholder="Your Email"
        name="email"
        errors={errors.email}
        register={register}
        variant="secondary"
      />
      <Field
        id="figmaURL"
        placeholder="Your Figma Design URL"
        name="figmaURL"
        errors={errors.figmaURL}
        register={register}
        variant="secondary"
      />
      <Button
        className="submitBtn"
        text="Submit an Inquiry"
        variant="primary"
      />
      <Button
        className="stellarform-flex-second-buttonArrow"
        text="Get in touch with us"
        variant="arrowPrimary"
        withArrow={true}
      />
    </form>
  );
};

export default FormStellar;
