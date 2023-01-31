import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from 'react';

const lazyRoutes = routes

export const Router = () => {

  // useEffect(()=>{}, [lazyRoutes])
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <h1>ReactRouter</h1>

            <ul>
              {lazyRoutes.map(({to, name}) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <Routes>

            {
            lazyRoutes.map(({path , Component}) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to}  />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
