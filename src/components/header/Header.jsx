import "./header.scss";

import TextField from "@mui/material/TextField";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";

const Header = (props) => {
  return (
    <Box component={"section"} className="header" position={"sticky"} top={0}>
      <div className="locate">
        <div className="detail">
          <a href="../react-material-dashboard/">
            <HomeIcon />
          </a>
          <p>/</p>
          <p>{props.name}</p>
        </div>
        <h1>{props.name}</h1>
      </div>
      <div className="options">
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Seacrh here"
            variant="outlined"
            size="small"
          />
        </div>
        <IconButton
          onClick={props.click}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <div className="user-tools">
          <a href="#">
            <AccountCircleIcon />
          </a>
          <a href="#">
            <SettingsIcon />
          </a>
          <a href="#">
            <NotificationsIcon />
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Header;
