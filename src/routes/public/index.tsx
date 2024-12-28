import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Categories from "../../pages/Categories/Categories";
import Product from "../../pages/Product/Product";
import Favourites from "../../pages/Favourites/Favourites";

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
  {
    path: "/favourites",
    element: <Favourites />,
  },
]);

export { router };
