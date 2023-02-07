import { LazyExoticComponent } from "react";
import { ShoppingPage } from '../pages/ShoppingPage';
import {RegisterPage, FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage} from "../03-forms/pages"

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent  
}


// const LazyLayout = lazy(() => import( /*webpackChunkName: "LazyPage1" */"../01-lazyload/layout/LazyLayout"));


export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    Component: ShoppingPage,
    name: "Home",
  },


  {
    to: "/Register",
    path: "/Register",
    Component: RegisterPage,
    name: "Register",
  },

  {
    to: "/Formik Test",
    path: "/Formik Test",
    Component: FormikBasicPage,
    name: "Formik Test",
  },
  {
    to: "/Formik Yup",
    path: "/Formik Yup",
    Component: FormikYupPage,
    name: "Formik Yup",
  },
  {
    to: "/Formik Components",
    path: "/Formik Components",
    Component: FormikComponents,
    name: "Formik Components",
  },

  {
    to: "/Formik Abstract",
    path: "/Formik Abstract",
    Component: FormikAbstract,
    name: "Formik Abstract",
  },

];
