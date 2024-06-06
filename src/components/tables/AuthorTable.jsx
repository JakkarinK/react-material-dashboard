import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import CoverTeam1 from "../../assets/img/author-table-img/team-1.jpg";
import CoverTeam2 from "../../assets/img/author-table-img/team-2.jpg";
import CoverTeam3 from "../../assets/img/author-table-img/team-3.jpg";
import { Avatar, Box, Link, Typography } from "@mui/material";

function createData(icon, name, email, role, role2, status, date) {
  return { icon, name, email, role, role2, status, date };
}

const rows = [
  createData(
    CoverTeam1,
    "John Michael",
    "john@creative-tim.com",
    "Manager",
    "Organization",
    "ONLINE",
    "23/04/18"
  ),
  createData(
    CoverTeam2,
    "Alexa Liras",
    "alexa@creative-tim.com",
    "Programator",
    "Developer",
    "OFFLINE",
    "11/01/19"
  ),
  createData(
    CoverTeam3,
    "Laurent Perrier",
    "laurent@creative-tim.com",
    "Executive",
    "Projects",
    "ONLINE",
    "19/09/17"
  ),
  createData(
    CoverTeam3,
    "Michael Levi",
    "michael@creative-tim.com",
    "Programator",
    "Developer",
    "ONLINE",
    "24/12/08"
  ),
  createData(
    CoverTeam2,
    "Richard Gran",
    "richard@creative-tim.com",
    "Manager",
    "Executive",
    "OFFLINE",
    "04/10/21"
  ),
  createData(
    CoverTeam3,
    "Miriam Eric",
    "miriam@creative-tim.com",
    "Programator",
    "Developer",
    "OFFLINE",
    "14/09/20"
  ),
];

const AuthorTable = () => {
  return (
    <TableContainer className="author-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>AUTHOR</TableCell>
            <TableCell>FUNCTION</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">EMPLOYED</TableCell>
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
                <Box>
                  <Typography variant="h6" component={"h1"}>
                    {row.name}
                  </Typography>
                  <Typography variant="caption" component={"span"}>
                    {row.email}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="p" component={"p"}>
                  {row.role}
                </Typography>
                <Typography variant="caption" component={"span"}>
                  {row.role2}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <span className={"status " + row.status}>{row.status}</span>
              </TableCell>
              <TableCell align="center">
                <Link href="#" underline="none">
                  <Typography variant="span" component={"p"}>
                    {row.date}
                  </Typography>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Link href="/dashboard" underline="none">
                  <Typography variant="span" component={"p"}>
                    Edit
                  </Typography>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AuthorTable;
