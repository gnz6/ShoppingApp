import {  useFormik } from "formik";
import * as Yup from "yup"
import "../styles/styles.css";
import { validation } from "./ValidationYup";


export const FormikYupPage = () => {
 

  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "" },
    onSubmit: (formData) => {
      console.log(formData);
    },
    validationSchema : validation
  });

  const {  handleSubmit, errors, touched , getFieldProps } = formik;

  return (
    <div>
      <h1>Formik Yup Form</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            type="text"
            placeholder="name"
            {...getFieldProps("firstname")}

          />
        </label>
        {touched.firstname && errors.firstname && (
          <span> {errors.firstname} </span>
        )}
        <label htmlFor="lastName">
          <input
            type="text"
            placeholder="lastname"
            {...getFieldProps("lastname")}

          />
        </label>

        {touched.lastname && errors.lastname && (
          <span> {errors.lastname} </span>
        )}

        <label htmlFor="email">
          <input
            type="email"
            placeholder="email"
            {...getFieldProps("email")}

          />
        </label>

        {touched.email && errors.email && <span> {errors.email} </span>}

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
