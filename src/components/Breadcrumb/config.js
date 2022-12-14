import react from "react";
import Cart from "../../pages/Cart";
import Contact from "../../pages/Contact";
import ProductDetails from "../../pages/Details/ProductDetails";
import Home from "../../pages/Home";
import Search from "../../pages/Search";

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
  {
    path: "/search/:id",
    element: <Search />,
  },
];

export default Breadcrumb_config;
