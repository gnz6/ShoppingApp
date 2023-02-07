import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MyCheckboxInput, MySelectInput, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          terms: false,
          jobType: "",
        }}
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
          terms: Yup.bool()
            .oneOf([true])
            .required("You must agree terms to continue"),
          jobType: Yup.string()
            .oneOf(
              ["Fullstack", "Backend", "Frontend", "Devops"],
              "Select your desired position"
            )
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              name="firstname"
              placeholder="Gonzalo"
            />

            <MyTextInput
              name="lastname"
              placeholder="Pirovano"
            />

            <MyTextInput
              type="email"
              name="email"
              placeholder="gnz@gnz.com"
            />

            <MySelectInput name="jobType">
              <option value={""}>Select Your Role</option>
              <option value={"Fullstack"}>Fullstack Dev</option>
              <option value={"Frontend"}>Frontend Dev</option>
              <option value={"Backend"}>Backend Dev</option>
              <option value={"Devops"}>DevOps</option>
            </MySelectInput>

            <MyCheckboxInput name="terms" label="Terms & Conditions" />
            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
