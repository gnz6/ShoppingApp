import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

export const Router = () => {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <h1>ReactRouter</h1>

            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
