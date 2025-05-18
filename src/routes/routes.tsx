import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import SignIn from "../pages/SignIn/SignIn";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Transactions from "../pages/Dashboard/Transactions/Transactions";
import Network from "../pages/Dashboard/Network/Network";
// import FundTransfer from "../pages/Dashboard/FundTransfer/FundTransfer";
// import Deposit from "../pages/Dashboard/Deposit/Deposit";
// import Withdraw from "../pages/Dashboard/Withdraw/Withdraw";
// import Donate from "../pages/Dashboard/Donate/Donate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "network",
        element: <Network />,
      },
      // {
      //   path: "fund-transfer",
      //   element: <FundTransfer />,
      // },
      // {
      //   path: "deposit",
      //   element: <Deposit />,
      // },
      // {
      //   path: "withdraw",
      //   element: <Withdraw />,
      // },
      // {
      //   path: "donate",
      //   element: <Donate />,
      // },
    ],
  },
]);