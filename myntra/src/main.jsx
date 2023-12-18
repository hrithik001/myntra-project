import React from "react";

import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import WishList from "./routes/WishList.jsx";

import NothingPage from "./routes/NothingPage.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./routes/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleProductPage from "./routes/SingleProduct.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import ProfilePage from "./routes/ProfilePage.jsx";

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
        path: "/profilepage",
        element: <ProfilePage />,
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
  <Auth0Provider
    domain="dev-7o0htit0gbimvw7t.us.auth0.com"
    clientId="fvP9ZXjJFGamvWXf5MGjkIGGxz7H5nFT"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Auth0Provider>
);
