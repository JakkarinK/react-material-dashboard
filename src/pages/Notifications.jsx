import React, { useState } from "react";
import Nav from "../components/navbar/Nav";
import Header from "../components/header/Header";
import {
  Container,
  styled,
  Box,
  Typography,
  Alert,
  Collapse,
  Grid,
  Snackbar,
  Button,
  Link,
} from "@mui/material";
import Footer from "../components/footer/Footer";

const BoxShadow = styled(Box)({
  height: "100%",
  marginTop: "4rem",
  padding: "1rem",
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
});

const Notifications = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
  const [open5, setOpen5] = useState(true);
  const [open6, setOpen6] = useState(true);
  const [open7, setOpen7] = useState(true);
  const [open8, setOpen8] = useState(true);
  return (
    <section className="notifications">
      <div className="container">
        <Container maxWidth="lg">
          <BoxShadow>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={2}
            >
              <Typography variant="h5" component={"p"}>
                Alerts
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setOpen1(true),
                    setOpen2(true),
                    setOpen3(true),
                    setOpen4(true),
                    setOpen5(true),
                    setOpen6(true),
                    setOpen7(true),
                    setOpen8(true);
                }}
              >
                Open
              </Button>
            </Box>
            <Box>
              <Collapse in={open1}>
                <Box sx={{ mb: 2 }}>
                  <Alert
                    icon={false}
                    severity="primary"
                    id={1}
                    onClose={() => {
                      setOpen1(false);
                    }}
                  >
                    A simple primary alert with{" "}
                    <Link
                      href="#"
                      underline="none"
                      color={"white"}
                      fontWeight={600}
                    >
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                </Box>
              </Collapse>
              <Collapse in={open2}>
                <Box sx={{ mb: 2 }}>
                  <Alert
                    icon={false}
                    severity="secondary"
                    onClose={() => {
                      setOpen2(false);
                    }}
                  >
                    A simple secondary alert with{" "}
                    <Link
                      href="#"
                      underline="none"
                      color={"white"}
                      fontWeight={600}
                    >
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                </Box>
              </Collapse>
              <Collapse in={open3}>
                <Box sx={{ mb: 2 }}>
                  <Alert
                    icon={false}
                    severity="success"
                    onClose={() => {
                      setOpen3(false);
                    }}
                  >
                    A simple success alert with{" "}
                    <Link
                      href="#"
                      underline="none"
                      color={"white"}
                      fontWeight={600}
                    >
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                </Box>
              </Collapse>
              <Collapse in={open4}>
                <Box sx={{ mb: 2 }}>
                  <Alert
                    icon={false}
                    severity="error"
                    onClose={() => {
                      setOpen4(false);
                    }}
                  >
                    A simple error alert with{" "}
                    <Link
                      href="#"
                      underline="none"
                      color={"white"}
                      fontWeight={600}
                    >
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                </Box>
              </Collapse>
              <Collapse in={open5}>
                <Box sx={{ mb: 2 }}>
                  <Alert
                    icon={false}
                    severity="warning"
                    onClose={() => {
                      setOpen5(false);
                    }}
                  >
                    A simple warning alert with{" "}
                    <Link
                      href="#"
                      underline="none"
                      color={"white"}
                      fontWeight={600}
                    >
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                </Box>
              </Collapse>
              <Collapse in={open6}>
                <Box sx={{ mb: 2 }}>
                  <Alert
                    icon={false}
                    severity="info"
                    onClose={() => {
                      setOpen6(false);
                    }}
                  >
                    A simple info alert with{" "}
                    <Link
                      href="#"
                      underline="none"
                      color={"white"}
                      fontWeight={600}
                    >
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                </Box>
              </Collapse>
              <Collapse in={open7}>
                <Box sx={{ mb: 2 }}>
                  <Alert
                    icon={false}
                    severity="light"
                    onClose={() => {
                      setOpen7(false);
                    }}
                  >
                    A simple light alert with{" "}
                    <Link
                      href="#"
                      underline="none"
                      color={"white"}
                      fontWeight={600}
                    >
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                </Box>
              </Collapse>
              <Collapse in={open8}>
                <Box sx={{ mb: 2 }}>
                  <Alert
                    icon={false}
                    severity="dark"
                    onClose={() => {
                      setOpen8(false);
                    }}
                  >
                    A simple dark alert with{" "}
                    <Link
                      href="#"
                      underline="none"
                      color={"white"}
                      fontWeight={600}
                    >
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                </Box>
              </Collapse>
            </Box>
          </BoxShadow>
          <BoxShadow>
            <Typography variant="h5" component={"h5"} mb={2}>
              Notifications
            </Typography>
            <Typography variant="subtitle2" component={"span"}>
              Notifications on this page use Toasts from Bootstrap. Read more
              details here.
            </Typography>
            <Grid container spacing={2} justifyContent={"center"}>
              <Grid item xs={12} md={6} lg={3}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "100%", height: "100%" }}
                >
                  SUCCESS NOTIFICATION
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "100%", height: "100%" }}
                >
                  INFO NOTIFICATION
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: "100%", height: "100%" }}
                >
                  WARNING NOTIFICATION
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: "100%", height: "100%" }}
                >
                  ERROR NOTIFICATION
                </Button>
              </Grid>
              <Snackbar message="I love snacks" />
            </Grid>
          </BoxShadow>
        </Container>
        <Footer />
      </div>
    </section>
  );
};

export default Notifications;
