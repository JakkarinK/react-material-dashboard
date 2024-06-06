import React, { useEffect, useState } from "react";
import "./navbar.scss";

import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableViewIcon from "@mui/icons-material/TableView";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Nav = (props) => {
  let activeClassName = "nav-active";
  // const [openNav, setOpenNav] = useState(true);

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <nav>
        <a className="brand" href="/dashboard">
          <h1>Material Dashboard 2</h1>
        </a>
        <hr />
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <DashboardIcon />
            Dashboard
          </div>
        </NavLink>
        <NavLink
          to={"/tables"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <TableViewIcon />
            Tables
          </div>
        </NavLink>
        <NavLink
          to={"/billing"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <ReceiptLongIcon />
            Billing
          </div>
        </NavLink>
        <NavLink
          to={"/notifications"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <NotificationsIcon />
            Notifications
          </div>
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <PersonIcon />
            Profile
          </div>
        </NavLink>
        <NavLink
          to={"/sign-in"}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="item">
            <LoginIcon />
            Sign In
          </div>
        </NavLink>
        <NavLink
          to={"/sign-up"}
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
