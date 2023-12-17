import React from "react";

import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import WishList from "./routes/WishList.jsx";
import Profile from "./routes/Profile.jsx";
import NothingPage from "./routes/NothingPage.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./routes/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleProductPage from "./routes/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/singlePage/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/nothing",
        element: <NothingPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
