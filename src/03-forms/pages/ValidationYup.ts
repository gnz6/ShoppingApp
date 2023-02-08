import * as Yup from "yup";

export const validation = Yup.object({
    firstname: Yup.string().max(15, "Must be 15 chars long or shorter").required("Required"),
    lastname: Yup.string().max(15, "Must be 15 chars long or shorter").required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
  })