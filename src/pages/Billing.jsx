import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";

import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EditIcon from "@mui/icons-material/Edit";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DeleteIcon from "@mui/icons-material/Delete";

import MasterCard from "../assets/img/billing-img/mastercard.webp";
import VisaCard from "../assets/img/billing-img/visacard.webp";
import Footer from "../components/footer/Footer";

const Billing = () => {
  const IconBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    borderRadius: "10px",
    color: "white",
    background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
  });

  const CardBox = styled(Box)({
    padding: "1rem 0.7rem",
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
    alignItems: "center",
    borderRadius: "10px",
    border: "1px solid #34476730",
  });

  const HeaderBox = styled(Box)({
    padding: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const BoxShadow = styled(Box)({
    height: "100%",
    padding: "1rem",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
  });

  const BillingInfoCard = styled(Box)({
    padding: "24px",
    marginBottom: "8px",
    marginTop: "16px",
    opacity: 1,
    background: "rgb(248, 249, 250)",
    color: "rgb(52, 71, 103)",
    borderRadius: "0.5rem",
    boxShadow: "none",
  });
  return (
    <section className="billing">
      <Box
        className="locate"
        sx={{ mb: { xs: 2, md: 2 }, mt: { xs: 2, md: 0 } }}
      >
        <div className="detail">
          <Link underline="none" href="../react-material-dashboard/">
            <HomeIcon />
          </Link>
          <p>/</p>
          <p>Billing</p>
        </div>
        <h1>Billing</h1>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
              <BoxShadow
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                  color: "#fff",
                  padding: "3rem 1rem",
                }}
              >
                <WifiRoundedIcon />
                <Typography variant="h4" component={"h1"} marginTop={3}>
                  4562 1122 4594 7852
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  marginTop={5}
                >
                  <Box display={"flex"} alignItems={"center"} gap={3}>
                    <Box>
                      <Typography
                        variant="p"
                        component="h5"
                        color={"#ffffff90"}
                      >
                        Card Holder
                      </Typography>
                      <Typography variant="h4" component="p">
                        Jack Peterson
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="p"
                        component="h5"
                        color={"#ffffff90"}
                      >
                        Expires
                      </Typography>
                      <Typography variant="h4" component="p">
                        11/22
                      </Typography>
                    </Box>
                  </Box>
                  <img width={48} src={MasterCard} alt="" />
                </Stack>
              </BoxShadow>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <BoxShadow className="salary" textAlign={"center"}>
                <IconBox>
                  <AccountBalanceRoundedIcon />
                </IconBox>
                <Typography variant="h5" component={"h1"} mt={2}>
                  Salary
                </Typography>
                <Typography variant="caption" component={"p"} mt={1}>
                  Belong Interactive
                </Typography>
                <hr />
                <Typography variant="h5" component={"span"}>
                  +$2000
                </Typography>
              </BoxShadow>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <BoxShadow className="paypal" textAlign={"center"}>
                <IconBox>
                  <AccountBalanceRoundedIcon />
                </IconBox>
                <Typography variant="h5" component={"h1"} mt={2}>
                  Paypal
                </Typography>
                <Typography variant="caption" component={"p"} mt={1}>
                  Freelance Payment
                </Typography>
                <hr />
                <Typography variant="h5" component={"span"}>
                  $455.00
                </Typography>
              </BoxShadow>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <BoxShadow className="payment">
                <HeaderBox>
                  <Typography variant="h5" component={"p"}>
                    Payment Method
                  </Typography>
                  <Button variant="contained" color="info">
                    + ADD NEW CARD
                  </Button>
                </HeaderBox>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <CardBox>
                      <Box display={"flex"} gap={3} alignItems={"center"}>
                        <img width={48} src={MasterCard} alt="" />
                        <Typography variant="p" component={"span"}>
                          **** **** **** 7852
                        </Typography>
                      </Box>
                      <Tooltip title="Edit Card" placement="right">
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </CardBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <CardBox>
                      <Box display={"flex"} gap={3} alignItems={"center"}>
                        <img width={48} src={VisaCard} alt="" />
                        <Typography variant="p" component={"span"}>
                          **** **** **** 5248
                        </Typography>
                      </Box>
                      <Tooltip title="Edit Card" placement="right">
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </CardBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <CardBox>
                      <Box display={"flex"} gap={3} alignItems={"center"}>
                        <img width={48} src={MasterCard} alt="" />
                        <Typography variant="p" component={"span"}>
                          **** **** **** 7852
                        </Typography>
                      </Box>
                      <Tooltip title="Edit Card" placement="right">
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </CardBox>
                  </Grid>
                </Grid>
              </BoxShadow>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <BoxShadow className="invoice">
            <HeaderBox>
              <Typography variant="h5" component={"p"}>
                Invoices
              </Typography>
              <Button variant="outlined">VIEW ALL</Button>
            </HeaderBox>
            <List>
              <ListItem>
                <ListItemText
                  primary="March, 01, 2020"
                  secondary="#MS-415646"
                />
                <Stack direction={"row"} gap={5} alignItems={"center"}>
                  <Typography variant="p" component={"span"} color={"#7b809a"}>
                    $180
                  </Typography>
                  <a href="#">
                    <Stack
                      direction={"row"}
                      gap={1}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <PictureAsPdfIcon />
                      <Typography variant="h5" component={"span"}>
                        PDF
                      </Typography>
                    </Stack>
                  </a>
                </Stack>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="February, 10, 2021"
                  secondary="#RV-126749"
                />
                <Stack direction={"row"} gap={5} alignItems={"center"}>
                  <Typography
                    variant="span"
                    component={"span"}
                    color={"#7b809a"}
                  >
                    $180
                  </Typography>
                  <a href="#">
                    <Stack
                      direction={"row"}
                      gap={1}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <PictureAsPdfIcon />
                      <Typography variant="h5" component={"span"}>
                        PDF
                      </Typography>
                    </Stack>
                  </a>
                </Stack>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="April, 05, 2020"
                  secondary="#QW-103578"
                />
                <Stack direction={"row"} gap={5} alignItems={"center"}>
                  <Typography
                    variant="span"
                    component={"span"}
                    color={"#7b809a"}
                  >
                    $180
                  </Typography>
                  <a href="#">
                    <Stack
                      direction={"row"}
                      gap={1}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <PictureAsPdfIcon />
                      <Typography variant="h5" component={"span"}>
                        PDF
                      </Typography>
                    </Stack>
                  </a>
                </Stack>
              </ListItem>
              <ListItem>
                <ListItemText primary="June, 25, 2019" secondary="#MS-415646" />
                <Stack direction={"row"} gap={5} alignItems={"center"}>
                  <Typography
                    variant="span"
                    component={"span"}
                    color={"#7b809a"}
                  >
                    $180
                  </Typography>
                  <a href="#">
                    <Stack
                      direction={"row"}
                      gap={1}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <PictureAsPdfIcon />
                      <Typography variant="h5" component={"span"}>
                        PDF
                      </Typography>
                    </Stack>
                  </a>
                </Stack>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="March, 01, 2019"
                  secondary="#AR-803481"
                />
                <Stack direction={"row"} gap={5} alignItems={"center"}>
                  <Typography
                    variant="span"
                    component={"span"}
                    color={"#7b809a"}
                  >
                    $180
                  </Typography>
                  <a href="#">
                    <Stack
                      direction={"row"}
                      gap={1}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <PictureAsPdfIcon />
                      <Typography variant="h5" component={"span"}>
                        PDF
                      </Typography>
                    </Stack>
                  </a>
                </Stack>
              </ListItem>
            </List>
          </BoxShadow>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <BoxShadow className="billing-info">
            <HeaderBox>
              <Typography variant="h5" component={"p"}>
                Billing Information
              </Typography>
            </HeaderBox>
            <Box>
              <BillingInfoCard>
                <HeaderBox padding={"0 !important"}>
                  <Typography variant="p" component={"p"}>
                    Oliver Liam
                  </Typography>
                  <Stack direction={"row"} gap={3}>
                    <Button variant="text" color="error">
                      <DeleteIcon /> DELETE
                    </Button>
                    <Button variant="text" color="info">
                      <EditIcon /> EDIT
                    </Button>
                  </Stack>
                </HeaderBox>
                <Typography variant="caption" component={"h1"}>
                  Company Name:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    Viking Burrito
                  </Typography>
                </Typography>

                <Typography variant="caption" component={"h1"}>
                  Email Address:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    oliver@burrito.com
                  </Typography>
                </Typography>

                <Typography variant="caption" component={"h1"}>
                  VAT Number:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    FRB1235476
                  </Typography>
                </Typography>
              </BillingInfoCard>
              <BillingInfoCard>
                <HeaderBox padding={"0 !important"}>
                  <Typography variant="p" component={"p"}>
                    Oliver Liam
                  </Typography>
                  <Stack direction={"row"} gap={3}>
                    <Button variant="text" color="error">
                      <DeleteIcon /> DELETE
                    </Button>
                    <Button variant="text" color="info">
                      <EditIcon /> EDIT
                    </Button>
                  </Stack>
                </HeaderBox>
                <Typography variant="caption" component={"h1"}>
                  Company Name:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    Viking Burrito
                  </Typography>
                </Typography>

                <Typography variant="caption" component={"h1"}>
                  Email Address:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    oliver@burrito.com
                  </Typography>
                </Typography>

                <Typography variant="caption" component={"h1"}>
                  VAT Number:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    FRB1235476
                  </Typography>
                </Typography>
              </BillingInfoCard>
              <BillingInfoCard>
                <HeaderBox padding={"0 !important"}>
                  <Typography variant="p" component={"p"}>
                    Oliver Liam
                  </Typography>
                  <Stack direction={"row"} gap={3}>
                    <Button variant="text" color="error">
                      <DeleteIcon /> DELETE
                    </Button>
                    <Button variant="text" color="info">
                      <EditIcon /> EDIT
                    </Button>
                  </Stack>
                </HeaderBox>
                <Typography variant="caption" component={"h1"}>
                  Company Name:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    Viking Burrito
                  </Typography>
                </Typography>

                <Typography variant="caption" component={"h1"}>
                  Email Address:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    oliver@burrito.com
                  </Typography>
                </Typography>

                <Typography variant="caption" component={"h1"}>
                  VAT Number:
                  <Typography variant="p" component={"span"} marginLeft={1}>
                    FRB1235476
                  </Typography>
                </Typography>
              </BillingInfoCard>
            </Box>
          </BoxShadow>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <BoxShadow className="transaction">
            <HeaderBox>
              <Typography variant="h5" component={"p"}>
                Your Transaction's
              </Typography>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <DateRangeIcon sx={{ color: "rgb(123, 128, 154)" }} />
                <Typography variant="button" component={"p"}>
                  23 - 30 March 2020
                </Typography>
              </Stack>
            </HeaderBox>
            <Box>
              <Typography variant="span" component={"p"}>
                NEWEST
              </Typography>

              <List>
                <ListItem
                  secondaryAction={
                    <Typography variant="span" component={"span"} color={"red"}>
                      - $ 2,500
                    </Typography>
                  }
                >
                  <ListItemAvatar>
                    <IconButton sx={{ border: "1px solid red" }}>
                      <ExpandMoreRoundedIcon color="error" />
                    </IconButton>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Netflix"
                    secondary={"27 March 2020, at 12:30 PM"}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Typography
                      variant="span"
                      component={"span"}
                      color={"green"}
                    >
                      + $ 2,000
                    </Typography>
                  }
                >
                  <ListItemAvatar>
                    <IconButton sx={{ border: "1px solid green" }}>
                      <ExpandLessRoundedIcon color="success" />
                    </IconButton>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Apple"
                    secondary={"27 March 2020, at 04:30 AM"}
                  />
                </ListItem>
              </List>
              <Typography variant="span" component={"p"}>
                YESTERDAY
              </Typography>

              <List>
                <ListItem
                  secondaryAction={
                    <Typography
                      variant="span"
                      component={"span"}
                      color={"green"}
                    >
                      + $ 750
                    </Typography>
                  }
                >
                  <ListItemAvatar>
                    <IconButton sx={{ border: "1px solid green" }}>
                      <ExpandLessRoundedIcon color="success" />
                    </IconButton>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Stripe"
                    secondary={"26 March 2020, at 13:45 PM"}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Typography
                      variant="span"
                      component={"span"}
                      color={"green"}
                    >
                      + $ 1,000
                    </Typography>
                  }
                >
                  <ListItemAvatar>
                    <IconButton sx={{ border: "1px solid green" }}>
                      <ExpandLessRoundedIcon color="success" />
                    </IconButton>
                  </ListItemAvatar>
                  <ListItemText
                    primary="HubSpot"
                    secondary={"26 March 2020, at 12:30 PM"}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Typography
                      variant="span"
                      component={"span"}
                      color={"green"}
                    >
                      + $ 2,500
                    </Typography>
                  }
                >
                  <ListItemAvatar>
                    <IconButton sx={{ border: "1px solid green" }}>
                      <ExpandLessRoundedIcon color="success" />
                    </IconButton>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Creative Tim"
                    secondary={"26 March 2020, at 08:30 AM"}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Typography variant="p" component={"span"}>
                      Pending
                    </Typography>
                  }
                >
                  <ListItemAvatar>
                    <IconButton sx={{ border: "1px solid gray" }}>
                      <PriorityHighIcon color="action" />
                    </IconButton>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Webflow"
                    secondary={"26 March 2020, at 05:00 AM"}
                  />
                </ListItem>
              </List>
            </Box>
          </BoxShadow>
        </Grid>
      </Grid>
      <Footer />
    </section>
  );
};

export default Billing;
