import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./toolkit/store";

const App = lazy(() => import("./App"));
const Admin = lazy(() => import("./Components/Admin/Admin"));
const Profil = lazy(() => import("./Components/profil/Profil"));
const Navabr = lazy(() => import("./Pages/Navbar/Navbar"));
const Blog = lazy(() => import("./2ndPage/Blogs/Blog"));
const Shop = lazy(() => import("./2ndPage/Shop/Shop"));

const AccaountDetal = lazy(() => import("./Components/profil/profilComponents/AccauntDetals/AccDetal"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navabr />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/profil",
        element: <Profil />,
        children: [
          {
            path: "/profil/detal",
            element: <AccaountDetal/>
          }
        ]
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
