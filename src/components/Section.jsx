import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import img from "./Assets/assets/Rectangle4.png";
import maskGroup from "./Assets/assets/Mask Group.png";
import React from "react";

const Section = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: { md: 10, xs: 1, sm: 2 },
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                p: { md: 2, xs: 3, sm: 3 },
                textAlign: { xs: "center", md: "left", sm: "left" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { md: "40px", sm: "30px", xs: "20px" },
                  mt: { md: 5, sm: 3, xs: 1 },
                  fontFamily: "Abhaya Libre",
                }}
              >
                Learn to garden with Confidence.
              </Typography>
            </Box>
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <img style={{ width: "100%" }} src={maskGroup} alt="" />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <Box
              p={{ md: 4, xs: 2, sm: 2 }}
              sx={{
                background: "#FAE5DC",
                mt: { md: -13, xs: 3, sm: -10 },
                maxWidth: { md: "650px", sm: "500px", xs: "400px" },
              }}
            >
              <Stack
                direction={{ md: "row", xs: "column ", sm: "row" }}
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  fontWeight={{ md: "400", xs: "200" }}
                  fontSize={{ md: "20px", xs: "13px", sm: "15" }}
                  textTransform="capitalize"
                  color="#000000"
                  alignItems="center"
                  sx={{
                    textAlign: { xs: "center", md: "left", sm: "left" },
                    mb: { xs: 2, md: 0, sm: 0 },
                    fontFamily: "Abhaya Libre",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lor Ipsum has been the industry'
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#FA8B82",
                    width: "100%",
                    maxWidth: { md: "200px", xs: "300px", sm: "150px" },
                    borderRadius: 6,
                    fontSize: { md: "15px", sm: "13px", xs: "12px" },
                    color: "#fff",
                    fontFamily: "Roboto",
                  }}
                  variant="contained"
                >
                  TAKE THE QUIZE
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
