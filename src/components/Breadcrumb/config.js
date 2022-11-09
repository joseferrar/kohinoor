import react from "react";
import ProductDetails from "../../pages/Details/ProductDetails";
import Home from "../../pages/Home";

const Breadcrumb_config = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
];

export default Breadcrumb_config;
