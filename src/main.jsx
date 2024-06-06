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
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "tables",
    element: <Tables />,
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
  {
    path: "billing",
    element: <Billing />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
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
