import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

const SignUp = () => {
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
        backgroundColor: "#ffffffcc",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)) center center / cover no-repeat, url(src/assets/img/bg.jpeg) transparent;",
          height: "300px",
          m: 3,
          p: 2,
          borderRadius: 3,
        }}
      >
        <Container fixed>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={2}
            borderRadius={2}
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
      </Box>
      <Container fixed>
        <Box
          position={"relative"}
          top={"-6rem"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item>
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
                    padding: "2rem 7rem",
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
    </Box>
  );
};

export default SignUp;
