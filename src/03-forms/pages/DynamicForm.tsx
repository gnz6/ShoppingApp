import { MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MySelectInput } from "../components/MySelectInput";
import * as Yup from 'yup';

const initialValues: { [x: string]: any } = {};
const requiredFields:{ [x:string]:any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  
  if(!input.validations) continue;

  let schema = Yup.string();

  for( const rule of input.validations){
    if(rule.type === "required"){
      schema = schema.required("Required Field")
    }
    if(rule.type === "minLength"){
      schema = schema.min((rule as any).value || 1 ,`Min Length must be ${(rule as any ).value}`)
    }
    if(rule.type === "email"){
      schema = schema.email("Must be a valid email")
    }
    if(rule.type === "password2"){
      schema = schema.oneOf([Yup.ref("password"), null], "Passwords does not match")
    }

  }
  requiredFields[input.name] = schema;
  }


  const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    key={name}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelectInput name={name} label={label}>
                    <option value=""> Select an Option </option>
                    {options?.map((option) => (
                      <option value={option.id} key={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </MySelectInput>
                );
              }
            })}

            <button type="submit"> Submit </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
