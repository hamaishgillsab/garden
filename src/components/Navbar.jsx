import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SubNav from "./SubNav";

let Data = ["Gardens", "Coaches", "Blog", "About us", "Contact"];
const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          background: "#549B7D",
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          py: 2,
          alignItems: "center",
        }}
      >
        {Data.map((a, i) => (
          <Box key={i}>
            <Typography
              color="#fff"
              fontSize={{md:"17px",sm:"15px",xs:"14px"}}
              sx={{ cursor: "pointer", fontFamily: "Red Hat Display" }}
              mx={{ md: 4, xs: 1 }}
            >
              {a}
            </Typography>
          </Box>
        ))}
      </Box>
      <SubNav />
    </>
  );
};

export default Navbar;
