import React from "react";
import LogoAtlassian from "../../assets/img/dashboard-table-img/logo-atlassian.svg";
import LogoInvision from "../../assets/img/dashboard-table-img/logo-invision.svg";
import LogoJira from "../../assets/img/dashboard-table-img/logo-jira.svg";
import LogoSlack from "../../assets/img/dashboard-table-img/logo-slack.svg";
import LogoSpotify from "../../assets/img/dashboard-table-img/logo-spotify.svg";
import LogoXd from "../../assets/img/dashboard-table-img/logo-xd.svg";

import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  linearProgressClasses,
  styled,
} from "@mui/material";

const DashboardProjectTable = () => {
  function createData(icon, name, members, budget, completion, color) {
    return { icon, name, members, budget, completion, color };
  }

  const rows = [
    createData(LogoXd, "Material UI XD Version", 4, "$14,000", 78),
    createData(LogoAtlassian, "Add Progress Track", 2, "$3,000", 13),
    createData(LogoJira, "Fix Platform Errors", 2, "Not set", 100, "success"),
    createData(LogoSpotify, "Launch our Mobile App", 4, "$20,500", 100, "success"),
    createData(LogoSlack, "Add the New Pricing Page", 1, "$500", 25),
    createData(LogoInvision, "Redesign New Online Shop", 2, "$2,000", 45),
  ];
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
    },
  }));

  return (
    <>
      {" "}
      <TableContainer className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>COMPANIES</TableCell>
              <TableCell align="left">MEMBERS</TableCell>
              <TableCell align="center">BUDGET</TableCell>
              <TableCell align="center">COMPLETION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img width={36} src={row.icon} alt="logo" /> {row.name}
                </TableCell>
                <TableCell align="left">{row.members}</TableCell>
                <TableCell align="center">{row.budget}</TableCell>
                <TableCell align="center">
                  <BorderLinearProgress
                  color={row.color}
                    variant="determinate"
                    value={row.completion}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DashboardProjectTable;
