import "../styles/styles.css";
import { InitialForm } from "../interfaces/FormInterfaces";
import { useFormik } from "formik";
import * as Yup from "yup";

export const initialForm: InitialForm = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

export const RegisterFormikPage = () => {

  const formik = useFormik({
    initialValues: initialForm,
    onSubmit: (formData) => {
      console.log(formData);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "At least 2 chars long")
        .max(15, "Max length is 15")
        .required("Required"),
      email: Yup.string().email("Must be an email").required("Required"),
      password: Yup.string()
        .min(6, "Password must have at least 6 characters")
        .required("Required"),
      password2: Yup.string()
        .min(6, "Password must have at least 6 characters")
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords does not match"),
    }),
  });

  const { handleSubmit, errors, touched, getFieldProps, handleReset } = formik;


  return (
    <div>
      <h1>
        Register <span>Powered By Formik</span>
      </h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input type="text" placeholder="name" {...getFieldProps("name")} />
        </label>
        {touched.name && errors.name && <span> {errors.name} </span>}

        <label htmlFor="email">
          <input type="email" placeholder="email" {...getFieldProps("email")} />
        </label>

        {touched.email && errors.email && <span> {errors.email} </span>}

        <label htmlFor="password">
          <input
            type="password"
            placeholder="password"
            {...getFieldProps("password")}
          />
        </label>

        {touched.password && errors.password && (
          <span> {errors.password} </span>
        )}

        <label htmlFor="password2">
          <input
            type="password2"
            placeholder="password2"
            {...getFieldProps("password2")}
          />
        </label>

        {touched.password2 && errors.password2 && (
          <span> {errors.password2} </span>
        )}

        <button type="submit"> Submit</button>
        <button type="submit" onClick={handleReset}> Reset</button>
      </form>
    </div>
  );
};
