import React from "react";
import "./Form.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../../../components/Button/Button";
import Field from "../../../../components/Field/Field";
import FieldTextArea from "../../../../components/FieldTextarea/FieldTextarea";

interface FormProps {
  name: string;
  email: string;
  context1: string;
  context2: string;
  message: string;
}

const Form: React.FC = () => {
  const schemaValidation = yup.object<FormProps>({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    context1: yup.string().required("Required"),
    context2: yup.string().required("Required"),
    message: yup.string().required("Required").min(50, "Minimum 50 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schemaValidation),
  });
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <form className="contactus-form" onSubmit={(e) => onSubmit(e)}>
      <div className="contactus-form-grid">
        <Field
          name="name"
          id="name"
          label="Name"
          placeholder="Enter your name"
          register={register}
          errors={errors.name}
          variant="primary"
        />
        <Field
          name="email"
          id="email"
          label="Email"
          placeholder="Enter your Email"
          register={register}
          errors={errors.email}
          variant="primary"
        />
        <Field
          name="context1"
          id="context1"
          label="Subject"
          placeholder="Provide context"
          register={register}
          errors={errors.context1}
          variant="primary"
        />
        <Field
          name="context2"
          id="context2"
          label="Subject"
          placeholder="Provide context"
          register={register}
          errors={errors.context2}
          variant="primary"
        />
        <FieldTextArea
          className="message"
          name="message"
          id="context2"
          label="Message"
          register={register}
          errors={errors.message}
        />
      </div>
      <Button className="submitBtn" text="Send Message" variant="black" />
    </form>
  );
};

export default Form;
