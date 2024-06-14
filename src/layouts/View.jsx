import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useState } from "react";

import "./viewcss.scss";
import Nav from "../components/navbar/Nav";
import Header from "../components/header/Header";
import { Drawer } from "@mui/material";

const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box className="grid">
      <Box
        className="n"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxShadow: "none",
              border: "none",
              backgroundColor: "transparent",
              width: `calc(${drawerWidth}px + 1rem)`,
            },
          }}
        >
          <Nav />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
          }}
          open
        >
          <Nav />
        </Drawer>
      </Box>
      <AppBar
        className={"a " + props.head}
        position="sticky"
        sx={{
          top: "0.7rem",
          marginTop: "1rem",
          width: { lg: "100%" },
          height: "80px",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Header name={props.name} click={handleDrawerToggle} />
      </AppBar>

      <Box
        className="s"
        sx={{
          px: 3,
          width: { lg: "100%" },
        }}
      >
        {props.page}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
