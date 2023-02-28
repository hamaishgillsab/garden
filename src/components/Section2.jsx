import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

let Data = [
  {
    number: 1,
    heading: "Lorem Ipsum is simply dummy tex",
    subHeading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standar",
    img: "emojione_wilted-flower.png",
  },
  {
    number: 2,
    heading: "Lorem Ipsum is simply dummy tex",
    subHeading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standar",
    img: "openmoji_wilted-flower.png",
  },
  {
    number: 3,
    heading: "Lorem Ipsum is simply dummy tex",
    subHeading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standar",
    img: "noto-v1_sunflower.png",
  },
];

const Section2 = () => {
  return (
    <Box
      sx={{
        mt: { md: 8, sm: 6, xs: 5 },
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 5,
                // border:"2px solid",
                mt: 2,
              }}
            >
              <Typography
                component="h1"
                fontWeight={700}
                lineHeight="28.13px"
                color="#549B7D"
                sx={{
                  alignItems: "center",
                  mb: { md: 3, xs: 1, sm: 2 },
                  fontSize: { md: "26px", sm: "23px", xs: "20px" },
                  fontFamily: "Roboto",
                }}
                textTransform="capitalize"
              >
                Lorem Ipsum
              </Typography>
              <Typography
                component="h1"
                fontWeight={400}
                lineHeight="28.31px"
                color="#000000"
                sx={{
                  alignItem: "center",
                  fontSize: {
                    md: "24px",
                    xs: "15px",
                    sm: "20",
                  },
                  mb: { md: 4, sm: 3, xs: 1 },
                  fontFamily: "Abhaya Libre",
                }}
                textTransform="capitalize"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lor{" "}
              </Typography>
              <Button
                sx={{
                  background: "#F2766D",
                  width: "100%",
                  maxWidth: "300px",

                  borderRadius: 6,
                  fontFamily: "Roboto",
                  mb:{xs:5}
                }}
                variant="contained"
              >
                TAKE THE QUIZE
              </Button>
            </Box>
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <Box
              sx={{
                background: "#ffffff",
                py: 2,
                width: "100%",
                textAlign: "center",
              }}
            >
              {Data.map((a, i) => (
                <Box sx={{ px: { md: 6, sm: 3, xs: 3 } }}>
                  <Typography
                    key={i}
                    component="h1"
                    fontWeight={700}
                    color="#549B7D"
                    textTransform="capitalize"
                    sx={{
                      fontSize: { md: "15px", sm: "13", xs: "8px" },
                      fontFamily: "Roboto",
                    }}
                    mb={1}
                    mt={4}
                  >
                    {a.heading}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={{ md: 3, sm: 2, xs: 1 }}
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontWeight={700}
                      textTransform="capitalize"
                      sx={{
                        fontSize: { md: "29px", sm: "20px", xs: "15px" },
                        fontFamily: "Abhaya Libre",
                      }}
                    >
                      {" "}
                      {a.number}
                    </Typography>
                    <Box
                      sx={{
                        fontSize: { md: "15px", sm: "13px", xs: "3px" },
                      }}
                    >
                      <Typography
                        fontWeight={400}
                        component="h6"
                        sx={{
                          fontSize: { md: "15px", sm: "14px", xs: "12px" },
                          fontFamily: "Abhaya Libre",
                        }}
                      >
                        {a.subHeading}
                      </Typography>
                    </Box>

                    <img src={a.img} alt="img" />
                  </Stack>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section2;
