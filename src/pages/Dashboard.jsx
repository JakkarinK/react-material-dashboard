import React from "react";
import Nav from "../components/navbar/Nav";
import Header from "../components/header/Header";
import {
  Box,
  Button,
  Grid,
  Typography,
  styled,
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WeekendIcon from "@mui/icons-material/Weekend";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StatsCard from "../components/card/StatsCard";
import BarChart from "../components/chart/BarChart";
import LineChart from "../components/chart/LineChart";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import OrderTimeline from "../components/timeline/OrderTimeline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import Footer from "../components/footer/Footer";
import DashboardProjectTable from "../components/tables/DashboardProjectTable";

const Dashboard = () => {
  const BoxShadow = styled(Box)({
    padding: "1rem",
    height: "100%",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
  });
  const Boxheader = styled(Box)({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  return (
    <div className="grid">
      <Nav />
      <section className="dashboard">
        <div className="container">
          <Header name={"Dashboard"} />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <StatsCard
                icon={<WeekendIcon fontSize="medium" />}
                color={"black"}
                name={"Bookings"}
                count={"281"}
                percent={"+55%"}
                lastest={"than lask week"}
              />
            </Grid>
            <Grid item xs={3}>
              <StatsCard
                icon={<LeaderboardIcon fontSize="medium" />}
                color={"blue"}
                name={"Today's Users"}
                count={"2,300"}
                percent={"+3%"}
                lastest={"than last month"}
              />
            </Grid>
            <Grid item xs={3}>
              <StatsCard
                icon={<StoreIcon fontSize="medium" />}
                color={"green"}
                name={"Revenue"}
                count={"34k"}
                percent={"+1%"}
                lastest={"than lask week"}
              />
            </Grid>
            <Grid item xs={3}>
              <StatsCard
                icon={<PersonAddIcon fontSize="medium" />}
                color={"pink"}
                name={"Followers"}
                count={"+91"}
                lastest={"Just updated"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={4}>
              <BoxShadow position={"relative"}>
                <Box position={"relative"} top={-40}>
                  <BarChart
                    label={"Sales"}
                    data={[50, 20, 10, 22, 50, 10, 40]}
                    bg={
                      "linear-gradient(195deg,rgb(73, 163, 241),rgb(26, 115, 232)"
                    }
                  />
                </Box>
                <Box>
                  <Typography variant="h5" component={"h1"}>
                    Website Views
                  </Typography>
                  <Typography variant="button" component={"span"}>
                    Last Campaign Performance
                  </Typography>
                </Box>
                <hr />
                <Box display={"flex"} alignItems={"center"} gap={0.5}>
                  <QueryBuilderIcon sx={{ color: "rgb(123, 128, 154)" }} />

                  <Typography variant="button" component={"span"}>
                    campaign sent 2 days ago
                  </Typography>
                </Box>
              </BoxShadow>
            </Grid>
            <Grid item xs={4}>
              <BoxShadow position={"relative"}>
                <Box position={"relative"} top={-40}>
                  <LineChart
                    label={"Mobile apps"}
                    data={[50, 40, 300, 320, 500, 350, 200, 230, 500]}
                    bg={
                      "linear-gradient(195deg,rgb(102, 187, 106),rgb(67, 160, 71)"
                    }
                  />
                </Box>
                <Box>
                  <Typography variant="h5" component={"h1"}>
                    Daily Sales
                  </Typography>
                  <Typography variant="button" component={"span"}>
                    (<b>+15%</b>) increase in today sales.
                  </Typography>
                </Box>
                <hr />
                <Box display={"flex"} alignItems={"center"} gap={0.5}>
                  <QueryBuilderIcon sx={{ color: "rgb(123, 128, 154)" }} />

                  <Typography variant="button" component={"span"}>
                    updated 4 min ago
                  </Typography>
                </Box>
              </BoxShadow>
            </Grid>
            <Grid item xs={4}>
              <BoxShadow position={"relative"}>
                <Box position={"relative"} top={-40}>
                  <LineChart
                    label={"Desktop apps"}
                    data={[50, 40, 300, 220, 500, 250, 400, 230, 500]}
                    bg={
                      "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
                    }
                  />
                </Box>
                <Box>
                  <Typography variant="h5" component={"h1"}>
                    Completed Tasks
                  </Typography>
                  <Typography variant="button" component={"span"}>
                    Last Campaign Performance
                  </Typography>
                </Box>
                <hr />
                <Box display={"flex"} alignItems={"center"} gap={0.5}>
                  <QueryBuilderIcon sx={{ color: "rgb(123, 128, 154)" }} />

                  <Typography variant="button" component={"span"}>
                    just updated
                  </Typography>
                </Box>
              </BoxShadow>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={0.1}>
            <Grid item xs={8}>
              <BoxShadow sx={{ p: 0 }}>
                <Boxheader sx={{ p: 2 }}>
                  <Box>
                    <Typography variant="h5" component={"h1"}>
                      Projects
                    </Typography>
                    <Box mt={1} display={"flex"} alignItems={"center"}>
                      <DoneIcon sx={{ color: "#1a73e8" }} />
                      <Typography variant="button" component={"span"}>
                        <b>30 done</b> this month
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Button color="info" sx={{minWidth:"20px"}}>
                      <MoreVertIcon />
                    </Button>
                  </Box>
                </Boxheader>
                <Box>
                  <DashboardProjectTable />
                </Box>
              </BoxShadow>
            </Grid>

            <Grid item xs={4}>
              <BoxShadow className="timeline-box">
                <Box>
                  <Typography variant="h5" component={"h1"}>
                    Orders overview
                  </Typography>
                  <Box mt={1} display={"flex"} alignItems={"center"}>
                    <ArrowUpwardIcon sx={{ color: "#4caf50" }} />

                    <Typography variant="button" component={"span"}>
                      <b>24%</b> this month
                    </Typography>
                  </Box>
                </Box>
                <div className="timeline">
                  <OrderTimeline />
                </div>
              </BoxShadow>
            </Grid>
          </Grid>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
