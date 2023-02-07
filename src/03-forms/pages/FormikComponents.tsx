import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{ firstname: "", lastname: "", email: "" , terms: false, jobType:""}}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .max(15, "Must be 15 chars long or shorter")
            .required("Required"),
          lastname: Yup.string()
            .max(15, "Must be 15 chars long or shorter")
            .required("Required"),
          email: Yup.string().email("Invalid Email").required("Required"),
          terms: Yup.bool().oneOf([true]).required("You must agree terms to continue"),
          jobType: Yup.string().oneOf(["Fullstack","Backend","Frontend","Devops"], "Select your desired position").required("Required")
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">
              <Field name="firstname" type="text" />
              <ErrorMessage name="firstname" component={"span"} />
            </label>

            <label htmlFor="lastnme">
              <Field name="lastname" type="text" />
              <ErrorMessage name="lastname" component={"span"}/>
            </label>

            <label htmlFor="email">
              <Field name="email" type="email" />
              <ErrorMessage name="email"component={"span"} />
              <ErrorMessage name="email"component={"span"} />
            </label>



            <label>Job Type
              <Field name="jobType" as="select" >

              <option value={""}>Select Your Role</option>
              <option value={"Fullstack"}>Fullstack Dev</option>
              <option value={"Frontend"}>Frontend Dev</option>
              <option value={"Backend"}>Backend Dev</option>
              <option value={"Devops"}>DevOps</option>
              </Field>

            <ErrorMessage name="jobType"component={"span"} />


            </label>

            <label >Terms and Conditions
            <Field type="checkbox" name="terms"/>
            <ErrorMessage name="terms"component={"span"} />

            </label>

            

            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
