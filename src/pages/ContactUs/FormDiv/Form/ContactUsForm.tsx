import React from "react";
import "./ContactUsForm.scss";

import { Formik, Form } from "formik";
import * as yup from "yup";

import Button from "../../../../components/Button/Button";
import FormikField from "../../../../components/FormikField/FormikField";

const contactUsValidationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  context1: yup.string().required("Required"),
  context2: yup.string().required("Required"),
  message: yup
    .string()
    .min(50, "Message must have at least 50 characters")
    .required("Required"),
});

const ContactUsForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        context1: "",
        context2: "",
        message: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
      validationSchema={contactUsValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {() => (
        <Form className="contactus-form">
          <div className="contactus-form-grid">
            <FormikField
              label="Name"
              name="name"
              placeholder="Enter your name"
              id="name"
              textarea={false}
            />
            <FormikField
              label="Email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              textarea={false}
            />
            <FormikField
              label="Subject"
              name="context1"
              id="context1"
              placeholder="Provide context"
              textarea={false}
            />
            <FormikField
              label="Subject"
              name="context2"
              id="context2"
              placeholder="Provide context"
              textarea={false}
            />
            <FormikField
              label="Message"
              name="message"
              id="message"
              textarea={true}
            />
          </div>
          <Button
            className="submitBtn"
            type="submit"
            text="Send Message"
            variant="black"
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
