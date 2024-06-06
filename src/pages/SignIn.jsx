import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = () => {
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
        background:
          "linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)) center center / cover no-repeat, url(src/assets/img/bg.jpeg) transparent;",
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
            href="/"
            color={"rgb(52, 71, 103)"}
            variant="h6"
          >
            Material Dashboard 2
          </Link>
          <Box display={"flex"} gap={2.5}>
            <Link
              href="/dashboard"
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
              href="/profile"
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
              href="/sign-up"
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
              href="sign-in"
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
          <Box width={200}></Box>
        </Box>
      </Container>
      <Container fixed>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item>
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
                    color: "#FFF",
                    background:
                      "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));",
                    padding: "1rem 7rem",
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
