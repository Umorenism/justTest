import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/signIn";
import Layout2 from "../Components/Layout2";
import HomeScreen from "../Pages/HomeScreen";
import Register from "../Pages/Register";
import Plans from "../Pages/Plans";
import Layout from "../Components/Layout";
import Upgrage from "../Pages/Upgrade";
import BromoRegister from "../Pages/BromoRegister";
import PremoRegister from "../Pages/PromoRegister";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: <Plans />,
      },
      {
        index: true,
        path: "/dark",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/fremo-register",
    element: <Register />,
  },
  {
    path: "/bromo-register",
    element: <BromoRegister />,
  },
  {
    path: "/premo-register",
    element: <PremoRegister />,
  },
  {
    path: "/Upgrade",
    element: <Upgrage />,
  },
  {
    path: "/HomeScreen/:projectID",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
