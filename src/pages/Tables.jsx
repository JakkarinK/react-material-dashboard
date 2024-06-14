import React from "react";
import AuthorTable from "../components/tables/AuthorTable";
import ProjectTable from "../components/tables/ProjectTable";
import Footer from "../components/footer/Footer";
import { Box, styled } from "@mui/material";

const HeadTitle = styled(Box)({
  top: "-2rem",
  position: "relative",
  color: "#fff",
  marginLeft: "16px",
  marginRight: "16px",
  marginTop: "-24px",
  padding: "24px 16px",
  opacity: 1,
  background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
  borderRadius: "0.5rem",
  boxShadow:
    "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem,rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
});
const Tables = () => {
  return (
    <section className="tables">
      <div className="container">
        <Box mt={10} sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
          <HeadTitle>Authors Table</HeadTitle>
          <AuthorTable />
        </Box>
        <Box mt={10} sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
          <HeadTitle>Projects Table</HeadTitle>
          <ProjectTable />
        </Box>
        <Footer />
      </div>
    </section>
  );
};

export default Tables;
