import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import img from "./Assets/assets/openmoji_gardening-gloves.png";
import { Container } from "@mui/system";


export default function ButtonAppBar() {

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Container>
        <Box
          sx={{
            display: { md: "flex", xs: "flex", sm: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
              <img src={img} alt="logo" />
              <Typography
                variant="h5"
                sx={{
                  flexGrow: 1,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
              GARDEN TREATMENT
              </Typography >
              <Typography
                color="#FA8B82"
                sx={{ cursor: "pointer", textTransform: "capitalize" }}
              > 
                Start a course{" "}
              </Typography>
              <Typography
                color="#FA8B82"
                sx={{ cursor: "pointer", textTransform: "capitalize" }}
              >
                FinD a Coache
              </Typography>
           
        </Box>
      </Container>
    </Box>
  );
}
