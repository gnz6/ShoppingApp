import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstname, lastname, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstname) {
      errors.firstname = "Required";
    } else if (firstname.length >= 15) {
      errors.firstname = "Must be 15 characters or less";
    }

    if (!lastname) {
      errors.lastname = "Required";
    } else if (lastname.length >= 10) {
      errors.lastname = "Must be 10 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "" },
    onSubmit: (formData) => {
      console.log(formData);
    },
    validate,
  });

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    formik;

  return (
    <div>
      <h1>Formik Test Form</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            type="text"
            name="firstname"
            placeholder="name"
            onChange={handleChange}
            value={values.firstname}
            onBlur={handleBlur}
          />
        </label>
        {touched.firstname && errors.firstname && (
          <span> {errors.firstname} </span>
        )}
        <label htmlFor="lastName">
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            onChange={handleChange}
            value={values.lastname}
            onBlur={handleBlur}
          />
        </label>

        {touched.lastname && errors.lastname && (
          <span> {errors.lastname} </span>
        )}

        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
        </label>

        {touched.email && errors.email && <span> {errors.email} </span>}

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
