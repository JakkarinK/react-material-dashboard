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
import View from "./layouts/View";

const router = createBrowserRouter([
  {
    path: "react-material-dashboard/",
    element: <View name="dashboard" page={<Dashboard />}></View>,
  },
  {
    path: "react-material-dashboard/dashboard",
    element: <View name="dashboard" page={<Dashboard />}></View>,
  },
  {
    path: "react-material-dashboard/tables",
    element: <View name="dashboard" page={<Tables />}></View>,
  },
  {
    path: "react-material-dashboard/notifications",
    element: <View name="dashboard" page={<Notifications />}></View>,
  },
  {
    path: "react-material-dashboard/billing",
    element: <View name="dashboard" page={<Billing />} head={"d-none"}></View>,
  },
  {
    path: "react-material-dashboard/profile",
    element: <View name="dashboard" page={<Profile />}></View>,
  },
  {
    path: "react-material-dashboard/sign-in",
    element: <SignIn />,
  },
  {
    path: "react-material-dashboard/sign-up",
    element: <SignUp />,
  },
  {
    path: "react-material-dashboard/view",
    element: <View name="dashboard" page={<Dashboard />}></View>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
