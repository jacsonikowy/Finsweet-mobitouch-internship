import React from "react";
import Button from "../../../../components/Button/Button";
import "./FormStellar.scss";
import FormikField from "../../../../components/FormikField/FormikField";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const valueSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  figmaURL: Yup.string().required("Required"),
});

const FormStellar: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        figmaURL: "",
      }}
      enableReinitialize={true}
      validationSchema={valueSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      {() => (
        <Form className="formStellar">
          <FormikField
            className="body1"
            id="name"
            name="name"
            placeholder="Your Name"
          />
          <FormikField
            className="body1"
            id="email"
            name="email"
            placeholder="Your Email"
          />
          <FormikField
            className="body1"
            id="figmaURL"
            name="figmaURL"
            placeholder="Paste your Design URL"
          />
          <div className="buttonWrapper">
            <Button
              className="submitBtn"
              text="Submit an Inquiry"
              variant="primary"
            />
            <Button
              type="button"
              className="buttonArrow"
              text="Get in touch with us"
              variant="arrowPrimary"
              withArrow={true}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormStellar;
