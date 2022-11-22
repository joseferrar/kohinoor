import react from "react";
import Cart from "../../pages/Cart";
import Contact from "../../pages/Contact";
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
  {
    path: "/contact us",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default Breadcrumb_config;
