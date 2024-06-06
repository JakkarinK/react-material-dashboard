import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";

// Pages
import Dashboard from "../../react-material-dashboard/src/pages/Dashboard";
import Tables from "../../react-material-dashboard/src/pages/Tables";
import Notifications from "../../react-material-dashboard/src/pages/Notifications";
import Billing from "../../react-material-dashboard/src/pages/Billing";
import Profile from "../../react-material-dashboard/src/pages/Profile";
import SignIn from "../../react-material-dashboard/src/pages/SignIn";
import SignUp from "../../react-material-dashboard/src/pages/SignUp";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";


const router = createBrowserRouter([
  {
    path: "react-material-dashboard/",
    element: <Dashboard />,
  },
  {
    path: "react-material-dashboard/dashboard",
    element: <Dashboard />,
  },
  {
    path: "react-material-dashboard/tables",
    element: <Tables />,
  },
  {
    path: "react-material-dashboard/notifications",
    element: <Notifications />,
  },
  {
    path: "react-material-dashboard/billing",
    element: <Billing />,
  },
  {
    path: "react-material-dashboard/profile",
    element: <Profile />,
  },
  {
    path: "react-material-dashboard/sign-in",
    element: <SignIn />,
  },
  {
    path: "react-material-dashboard/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
