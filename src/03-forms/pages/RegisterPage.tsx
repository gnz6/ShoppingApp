import "../styles/styles.css";
import { ChangeEvent, useState } from "react";
import { InitialForm,  } from '../interfaces/FormInterfaces';
import { useForm } from '../hooks/useForm';

export const initialForm: InitialForm = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

export const RegisterPage = () => {

    const {formData ,name, password, password2, email, onChange, onReset,isValidEmail} = useForm(initialForm)


  const onSubmit = (event: React.FormEvent<HTMLElement> ) => {
    event.preventDefault();
    // console.log(formData)
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={` ${name.trim().length <= 0 && "has-error" }`}
        />
        { name.trim().length <= 0 && <span> The name is required</span> }
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Invalid Email</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          name="password"
        />
        { password.trim().length <= 0 && <span> The password is required</span> }
        { password.trim().length < 6 &&  password.trim().length > 0 && <span> The password must have at least 6 characters</span> }

        <input
          type="password"
          placeholder="Password2"
          value={password2}
          onChange={onChange}
          name="password2"
        />
        { password2.trim().length <= 0 && <span> The password confirm is required</span> }
        { password ===  password2 && password.length && <span>  The password does not match </span> }


        <button  type="submit">Create User</button>
        <button onClick={()=>onReset(initialForm)}  type="submit">Clear Fields</button>
      </form>
    </div>
  );
};
