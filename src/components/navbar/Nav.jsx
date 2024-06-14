import React, { useEffect, useState } from "react";
import "./navbar.scss";

import { Box, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";

// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableViewIcon from "@mui/icons-material/TableView";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Nav = () => {
  let activeClassName = "nav-active";

  return (
    <Box>
      <nav>
        <a className="brand" href="../react-material-dashboard/dashboard">
          <h1>Material Dashboard 2</h1>
        </a>
        <hr />
        <NavLink
          to={"../react-material-dashboard/dashboard"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <DashboardIcon />
            Dashboard
          </div>
        </NavLink>
        <NavLink
          to={"../react-material-dashboard/tables"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <TableViewIcon />
            Tables
          </div>
        </NavLink>
        <NavLink
          to={"../react-material-dashboard/billing"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <ReceiptLongIcon />
            Billing
          </div>
        </NavLink>
        <NavLink
          to={"../react-material-dashboard/notifications"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <NotificationsIcon />
            Notifications
          </div>
        </NavLink>
        <NavLink
          to={"../react-material-dashboard/profile"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <PersonIcon />
            Profile
          </div>
        </NavLink>
        <NavLink
          to={"../react-material-dashboard/sign-in"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <LoginIcon />
            Sign In
          </div>
        </NavLink>
        <NavLink
          to={"../react-material-dashboard/sign-up"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <AssignmentIcon />
            Sign Up
          </div>
        </NavLink>
      </nav>
    </Box>
  );
};

export default Nav;
