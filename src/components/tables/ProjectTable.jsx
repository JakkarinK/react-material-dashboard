import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import LogoAsuna from "../../assets/img/project-table-img/logo-asana.svg";
import LogoGithub from "../../assets/img/project-table-img/logo-github.svg";
import LogoAtlassian from "../../assets/img/project-table-img/logo-atlassian.svg";
import LogoSpotify from "../../assets/img/project-table-img/logo-spotify.svg";
import LogoSlack from "../../assets/img/project-table-img/logo-slack.svg";
import LogoInvision from "../../assets/img/project-table-img/logo-invision.svg";
import {
  Avatar,
  Box,
  LinearProgress,
  Link,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";

function createData(icon, name, budget, status, percent, color) {
  return { icon, name, budget, status, percent, color };
}

const rows = [
  createData(LogoAsuna, "Asana", "$2,500", "working", 60, "primary"),
  createData(LogoGithub, "Github", "$5,000", "done", 100, "success"),
  createData(LogoAtlassian, "Atlassian", "$3,400", "canceled", 30, "error"),
  createData(LogoSpotify, "Spotify", "$14,000", "working", 80, "primary"),
  createData(LogoSlack, "Slack", "$1,000", "canceled", 0),
  createData(LogoInvision, "Invesion", "$2,300", "done", 100, "success"),
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  backgroundColor:
    theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

const ProjectTable = () => {
  return (
    <TableContainer className="project-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PROJECT</TableCell>
            <TableCell>BUDGET</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">COMPLETION</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar src={row.icon}></Avatar>
                <Typography variant="h6" component={"h1"}>
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="span" component={"p"}>
                  {row.budget}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="span" component={"p"}>
                  {row.status}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                >
                  <Typography variant="span" component={"p"}>
                    {row.percent}%
                  </Typography>
                  <BorderLinearProgress
                    sx={{ width: "9rem" }}
                    variant="determinate"
                    value={row.percent}
                    color={row.color}
                  />
                </Box>
              </TableCell>
              <TableCell align="center">
                <Link
                  underline="none"
                  color={"rgb(123, 128, 154)"}
                  href="/dashboard"
                >
                  <MoreVertIcon />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
