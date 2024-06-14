import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Menu,
  MenuItem,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Footer from "../components/footer/Footer";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import MenuIcon from "@mui/icons-material/Menu";

const SignIn = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      className="sign-in"
      component={"section"}
      height={"100vh"}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      m={0}
      sx={{
        backgroundColor: "#1d1b1b",
      }}
    >
      <Container fixed>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={3}
          p={2}
          borderRadius={2}
          sx={{ backgroundColor: "#ffffffcc" }}
        >
          <Link
            underline="none"
            href="../react-material-dashboard/"
            color={"rgb(52, 71, 103)"}
            variant="h6"
          >
            Material Dashboard 2
          </Link>
          <Box gap={2.5} sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              href="../react-material-dashboard/dashboard"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "rgb(123, 128, 154)",
              }}
            >
              <DonutLargeIcon fontSize="small" />
              Dashboard
            </Link>
            <Link
              href="../react-material-dashboard/profile"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "rgb(123, 128, 154)",
              }}
            >
              <PersonIcon fontSize="small" />
              Profile
            </Link>
            <Link
              href="../react-material-dashboard/sign-up"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "rgb(123, 128, 154)",
              }}
            >
              <AccountCircleIcon fontSize="small" />
              Sign Up
            </Link>
            <Link
              href="../react-material-dashboard/sign-in"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "rgb(123, 128, 154)",
              }}
            >
              <KeyIcon fontSize="small" />
              Sign In
            </Link>
          </Box>
          <Box width={200} sx={{ display: { xs: "none", md: "block" } }}></Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Button color="info" onClick={handleClick}>
              <MenuIcon />
            </Button>
          </Box>
        </Box>
      </Container>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          "& .MuiPaper-root": {
            m: "1rem auto 0 auto",
            ml: { xs: 0, sm: "1rem" },
            width: "550px",
            borderRadius: "10px",
          },
        }}
      >
        <MenuItem sx={{ display: "block" }}>
          <Link
            href="../react-material-dashboard/dashboard"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "rgb(123, 128, 154)",
              p: "5px 1rem",
            }}
          >
            <DonutLargeIcon fontSize="small" />
            Dashboard
          </Link>
        </MenuItem>
        <MenuItem sx={{ display: "block" }}>
          <Link
            href="../react-material-dashboard/profile"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "rgb(123, 128, 154)",
              p: "5px 1rem",
            }}
          >
            <PersonIcon fontSize="small" />
            Profile
          </Link>
        </MenuItem>
        <MenuItem sx={{ display: "block" }}>
          <Link
            href="../react-material-dashboard/sign-up"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "rgb(123, 128, 154)",
              p: "5px 1rem",
            }}
          >
            <AccountCircleIcon fontSize="small" />
            Sign Up
          </Link>
        </MenuItem>
        <MenuItem sx={{ display: "block" }}>
          <Link
            href="../react-material-dashboard/sign-in"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "rgb(123, 128, 154)",
              p: "5px 1rem",
            }}
          >
            <KeyIcon fontSize="small" />
            Sign In
          </Link>
        </MenuItem>
      </Menu>

      <Container fixed>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item width={"100%"}  maxWidth={"480px"}>
              <Paper
                elevation={0}
                sx={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    color: "#FFF",
                    background:
                      "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));",
                    padding: "1rem 0",
                    margin: "0 auto",
                    borderRadius: "10px",
                    position: "relative",
                    top: "-3rem",
                  }}
                >
                  <Typography
                    variant="h4"
                    component={"h1"}
                    textAlign={"center"}
                  >
                    Sign in
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      gap: 5,
                      my: 2,
                    }}
                  >
                    <Link href="#" underline="none" p={1}>
                      <FacebookIcon sx={{ color: "#fff" }} />
                    </Link>
                    <Link href="#" underline="none" p={1}>
                      <GitHubIcon sx={{ color: "#fff" }} />
                    </Link>
                    <Link href="#" underline="none" p={1}>
                      <GoogleIcon sx={{ color: "#fff" }} />
                    </Link>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  textAlign={"center"}
                  my={2}
                >
                  <FormControl>
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      sx={{ marginBottom: 2 }}
                    />
                    <TextField
                      id="email"
                      label="Password"
                      variant="outlined"
                      sx={{ marginBottom: 2 }}
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Remember me"
                      sx={{ marginBottom: 3 }}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        marginBottom: 5,
                        background:
                          "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));",
                      }}
                    >
                      SIGN IN
                    </Button>
                    <Box>
                      <Typography variant="caption" component={"span"}>
                        Don't have an account?{" "}
                        <Link href="#" underline="none">
                          Sign up
                        </Link>
                      </Typography>
                    </Box>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default SignIn;
