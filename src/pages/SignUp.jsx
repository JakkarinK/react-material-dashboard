import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import Footer from "../components/footer/Footer";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import MenuIcon from "@mui/icons-material/Menu";

const BoxSignUp = styled(Box)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  m: 0,
  backgroundColor: "#ffffffcc",
});

const HeadSignUp = styled(Box)({
  backgroundColor: "#1d1b1b",
  height: "30vh",
  margin: "1rem",
  padding: "1rem",
  borderRadius: "10px",
});

const HeadNav = styled(Box)({
  justifyContent: "space-between",
  alignItems: "center",
  p: 2,
  borderRadius: 2,
});

const SignUp = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BoxSignUp className="sign-in" component={"section"}>
      <HeadSignUp>
        <Container fixed>
          <HeadNav display={{ xs: "flex" }} justifyContent={"space-between"}>
            <Link
              underline="none"
              href="../react-material-dashboard/"
              color={"rgb(52, 71, 103)"}
              variant="h6"
            >
              Material Dashboard 2
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" } }} gap={2.5}>
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

            <Box sx={{ display: { xs: "none", md: "flex" } }} width={200}></Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Button color="info" onClick={handleClick}>
                <MenuIcon />
              </Button>
            </Box>
          </HeadNav>
        </Container>
      </HeadSignUp>
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
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            top: { xs: "0", md: "-4rem" },
          }}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item width={"100%"} maxWidth={"480px"}>
              <Paper
                elevation={2}
                sx={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    color: "#FFF",
                    background:
                      "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));",
                    padding: { xs: "2rem", sm: "2rem 7rem" },
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
                    Join us today
                  </Typography>
                  <Typography
                    variant="body2"
                    component={"h1"}
                    textAlign={"center"}
                    my={2}
                  >
                    Enter your email and password to register
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  textAlign={"center"}
                  my={2}
                >
                  <FormControl>
                    <TextField
                      id="name"
                      label="Name"
                      variant="standard"
                      sx={{ marginBottom: 2 }}
                    />
                    <TextField
                      id="email"
                      label="Email"
                      variant="standard"
                      sx={{ marginBottom: 2 }}
                    />
                    <TextField
                      id="email"
                      label="Password"
                      variant="standard"
                      sx={{ marginBottom: 2 }}
                    />
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      marginBottom={3}
                    >
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="I agree the"
                        sx={{ marginRight: 0 }}
                      />
                      <Link href="#" underline="none">
                        Terms and Conditions
                      </Link>
                    </Box>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        marginBottom: 5,
                        background:
                          "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));",
                      }}
                    >
                      SIGN UP
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
    </BoxSignUp>
  );
};

export default SignUp;
