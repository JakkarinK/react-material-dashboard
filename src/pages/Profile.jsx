import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Switch,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../components/footer/Footer";

import PicProfile1 from "../assets/img/author-table-img/team-1.jpg";
import PicProfile2 from "../assets/img/author-table-img/team-2.jpg";
import PicProfile3 from "../assets/img/author-table-img/team-3.jpg";

import Project1 from "../assets/img/projects-img/project-1.jpg";
import Project2 from "../assets/img/projects-img/project-2.jpg";
import Project3 from "../assets/img/projects-img/project-3.jpg";
import Project4 from "../assets/img/projects-img/project-4.jpeg";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const BgBox = styled(Box)({
  background:
    'linear-gradient(195deg, rgba(73, 163, 241, 0.6), rgba(26, 115, 232, 0.6)) 50% center / cover, url("src/assets/img/profile-img/bg-profile.jpeg") transparent;',
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
  position: "relative",
  minHeight: "18.75rem",
  opacity: 1,
  color: "rgb(52, 71, 103)",
  boxShadow: "none",
  borderRadius: "0.75rem",
  backgroundPosition: "50% center",
  overflow: "hidden",
  width: "100%",
});

const BoxShadow = styled(Box)({
  height: "100%",
  marginTop: "4rem",
  padding: "1rem",
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
});

const Profile = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="profile">
      <div className="container">
        <Box>
          <BgBox />
          <BoxShadow position={"relative"} top={-150} sx={{ mx: 3 }}>
            <Grid container spacing={2} justifyContent={"space-between"}>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      sx={{ width: 64, height: 64 }}
                      alt="Remy Sharp"
                      src={PicProfile1}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      color={"rgb(52, 71, 103)"}
                    >
                      Richard Davis
                    </Typography>
                    <Typography variant="button" component={"span"}>
                      CEO / Co-Founder
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="one" label="Item One" />
                  <Tab value="two" label="Item Two" />
                  <Tab value="three" label="Item Three" />
                </Tabs>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Typography variant="h6" component={"h6"}>
                  Platform Settings
                </Typography>
                <Box>
                  <Typography variant="body1" component={"span"}>
                    ACCOUNT
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Email me when someone follows me"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Email me when someone answers on my post"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Email me when someone mentions me"
                    />
                  </FormGroup>
                </Box>
                <Box>
                  <Typography variant="body1" component={"span"}>
                    APPLICATION
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch />}
                      label="New launches and projects"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Monthly product updates"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Subscribe to newsletter"
                    />
                  </FormGroup>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="h6" component={"h6"}>
                    Profile Information
                  </Typography>
                  <Link href="#" color={"rgb(123, 128, 154)"}>
                    <EditIcon />
                  </Link>
                </Box>
                <Box>
                  <Typography variant="button" component={"span"}>
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                  </Typography>
                </Box>
                <Box>
                  <Box mt={5}>
                    <Typography variant="p" component={"span"}>
                      Full Name:
                    </Typography>
                    <Typography variant="button" component={"span"}>
                      Alec M. Thompson
                    </Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography variant="p" component={"span"}>
                      Mobile:
                    </Typography>
                    <Typography variant="button" component={"span"}>
                      (44) 123 1234 123
                    </Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography variant="p" component={"span"}>
                      Email:
                    </Typography>
                    <Typography variant="button" component={"span"}>
                      alecthompson@mail.com
                    </Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography variant="p" component={"span"}>
                      Location:
                    </Typography>
                    <Typography variant="button" component={"span"}>
                      USA
                    </Typography>
                  </Box>
                  <Box mt={1} display={"flex"} alignItems={"center"} gap={1}>
                    <Typography variant="p" component={"span"}>
                      Social:
                    </Typography>
                    <Link href="#" underline="none">
                      <FacebookIcon sx={{ color: "rgb(59, 89, 152)" }} />
                    </Link>
                    <Link href="#" underline="none">
                      <XIcon sx={{ color: "rgb(85, 172, 238)" }} />
                    </Link>
                    <Link href="#" underline="none">
                      <InstagramIcon sx={{ color: "rgb(18, 86, 136)" }} />
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" component={"h6"}>
                  Conversations
                </Typography>
                <Box>
                  <List>
                    <ListItem secondaryAction={<Button>REPLY</Button>}>
                      <ListItemAvatar>
                        <Avatar src={PicProfile1} />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Sophie B."
                        secondary="Hi! I need more information.."
                      />
                    </ListItem>
                    <ListItem secondaryAction={<Button>REPLY</Button>}>
                      <ListItemAvatar>
                        <Avatar src={PicProfile2} />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Anne Marie"
                        secondary="Awesome work, can you.."
                      />
                    </ListItem>
                    <ListItem secondaryAction={<Button>REPLY</Button>}>
                      <ListItemAvatar>
                        <Avatar src={PicProfile3} />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Ivanna"
                        secondary="About files I can.."
                      />
                    </ListItem>
                    <ListItem secondaryAction={<Button>REPLY</Button>}>
                      <ListItemAvatar>
                        <Avatar src={PicProfile1} />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Peterson"
                        secondary="Have a great afternoon.."
                      />
                    </ListItem>
                    <ListItem secondaryAction={<Button>REPLY</Button>}>
                      <ListItemAvatar>
                        <Avatar src={PicProfile2} />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Nick Daniel"
                        secondary="Hi! I need more information.."
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Typography variant="h6" component={"h6"}>
                Projects
              </Typography>
              <Typography variant="button" component={"span"}>
                Architects design houses
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Card elevation={0}>
                    <CardMedia sx={{ height: 140 }} image={Project2} />
                    <CardContent>
                      <Typography variant="caption" component="span">
                        Project #2
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Modern
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" size="small">
                        VIEW PROJECT
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Card elevation={0}>
                    <CardMedia sx={{ height: 140 }} image={Project1} />
                    <CardContent>
                      <Typography variant="caption" component="span">
                        Project #2
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Modern
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" size="small">
                        VIEW PROJECT
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Card elevation={0}>
                    <CardMedia sx={{ height: 140 }} image={Project3} />
                    <CardContent>
                      <Typography variant="caption" component="span">
                        Project #2
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Modern
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" size="small">
                        VIEW PROJECT
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Card elevation={0}>
                    <CardMedia sx={{ height: 140 }} image={Project4} />
                    <CardContent>
                      <Typography variant="caption" component="span">
                        Project #2
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Modern
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" size="small">
                        VIEW PROJECT
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </BoxShadow>
        </Box>
        <Footer />
      </div>
    </section>
  );
};

export default Profile;
