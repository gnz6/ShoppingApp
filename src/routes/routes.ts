import { lazy, LazyExoticComponent } from "react";
import { Users } from '../components/Users';
import { About } from '../components/About';
import { Home } from "../components/Home";
import { ShoppingPage } from '../pages/ShoppingPage';
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
    to: "/about",
    path: "/about",
    Component: About,
    name: "About",
  },
  {
    to: "/Users",
    path: "/Users",
    Component: Users,
    name: "Users",
  },

];
