// import React from 'react'
import "./App.css";
import Navbar from "./components/NavBar/navbar";
import Footer from "./components/Footer/Footer";
import OrderDetails from './components/Orders/OrderDetails';
import HomePage from "./components/HomePage/HomePage";
import Product from "./components/Product/Product";
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from "./components/cart/cart";
import CheckOut from './components/Checkout/CheckOut';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ItemWatch from "./components/Items/ItemWatch";
import ItemLaptop from "./components/Items/ItemLaptop";
import ItemPhone from "./components/Items/ItemPhone";
import ItemSaree from "./components/Items/ItemSaree";
import ItemLehenga from "./components/Items/ItemLehnga";
import Order from "./components/Orders/Order";
import LoginForm from "./auth/loginForm";
import SignupForm from "./auth/signupForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/:men/:kurta",
    element: <Product />,
  },

  {
    path: "/watch",
    element: <ItemWatch />,
  },

  {
    path: "/laptop",
    element: <ItemLaptop />,
  },

  {
    path: "/phone",
    element: <ItemPhone />,
  },

  {
    path: "/:women/:saree",
    element: <ItemSaree />,
  },

  {
    path: "/lehnga",
    element: <ItemLehenga />,
  },
  
  {
    path: "/account/order",
    element: <Order/>,
  },
  
  {
    path: "/checkout",
    element: <CheckOut/>,
  },
  
  {
    path: "/:account/:order-detail",
    element: (<OrderDetails/> ),
  },
 
  {
    path: "product/:productId",
    element: (<ProductDetails/> ),
  },
  {
    path: "/login",
    element: (<LoginForm/> ),
  },
 
  {
    path: "/signup",
    element: (<SignupForm/> ),
  },
 
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
