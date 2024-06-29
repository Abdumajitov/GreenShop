import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./toolkit/store";

const App = lazy(() => import("./App"));
const Admin = lazy(() => import("./Components/Admin/Admin"));
const Profil = lazy(() => import("./Components/profil/Profil"));
const Navabr = lazy(() => import("./Pages/Navbar/Navbar"));
const Blog = lazy(() => import("./2ndPage/Blogs/Blog"));
const Shop = lazy(() => import("./2ndPage/Shop/Shop"));

const AccaountDetal = lazy(() =>
  import("./Components/profil/profilComponents/AccauntDetals/AccDetal")
);
const Addres = lazy(() =>
  import("./Components/profil/profilComponents/Addres/Addres")
);
const Download = lazy(() =>
  import("./Components/profil//profilComponents/Dowland/Dowland")
);
const Likes = lazy(() =>
  import("./Components/profil/profilComponents/Likes/Likes")
);
const Orders = lazy(() =>
  import("./Components/profil/profilComponents/Orders/Orders")
);
const Support = lazy(() =>
  import("./Components/profil/profilComponents/Support/Support")
);
const ProductItem = lazy(() => import("./Components/producPage/ProductPage"));
const Korzina = lazy(() => import("./Components/Korzina/Korzina"));

const AdminUsers = lazy(() =>
  import("./Components/Admin/AdminComponents/AdminUsers/AdminUser")
);
const AdminAnalistik = lazy(() =>
  import("./Components/Admin/AdminComponents/AdminAnalistik/AdminAnalis")
);
const AdminProd = lazy(() =>
  import("./Components/Admin/AdminComponents/AdminProducts/AdminProd")
);
const prodPage = lazy(() => import("./Components/ProductItem/ProdItem"));

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
        path: "/productItem/:id",
        element: <ProductItem />,
      },
      {
        path: "/korzina",
        element: <Korzina />,
      },
      {
        path: "/profil",
        element: <Profil />,
        children: [
          {
            path: "/profil/detal",
            element: <AccaountDetal />,
          },
          {
            path: "/profil/addres",
            element: <Addres />,
          },
          {
            path: "/profil/download",
            element: <Download />,
          },
          {
            path: "/profil/likes",
            element: <Likes />,
          },
          {
            path: "/profil/orders",
            element: <Orders />,
          },
          {
            path: "/profil/support",
            element: <Support />,
          },
        ],
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
    children: [
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
      {
        path: "/admin/Prod",
        element: <AdminProd />,
      },
      {
        path: "/admin/Analistik",
        element: <AdminAnalistik />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/support",
        element: <Support />,
      },
    ],
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
