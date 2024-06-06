import React from "react";
import "./footer.scss";
import { Box, Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box width={"100%"} py={2} mx={0}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="span">
            © 2024, made with by{" "}
            <Link href="https://www.creative-tim.com/product/material-dashboard-react-nodejs" underline="none" color={"rgb(52, 71, 103)"}>
              Creative Tim
            </Link>{" "}
            for a better web.
          </Typography>
        </Box>
        <Box>
          <Link href="#" underline="none" mx={1} color={"rgb(123, 128, 154)"}>
            Creative Tim
          </Link>
          <Link href="#" underline="none" mx={1} color={"rgb(123, 128, 154)"}>
            About Us
          </Link>
          <Link href="#" underline="none" mx={1} color={"rgb(123, 128, 154)"}>
            Blog
          </Link>
          <Link href="#" underline="none" mx={1} color={"rgb(123, 128, 154)"}>
            License
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
