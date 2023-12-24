import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Categories from "../../pages/Categories/Categories";
import Product from "../../pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories/:slug",
    element: <Categories />,
  },
  {
    path: "/categories/:slug/:productId",
    element: <Product />,
  },
]);

export { router };
