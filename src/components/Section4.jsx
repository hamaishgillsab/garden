import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

let Data = [
  {
    img: "emojione_wilted-flower.png",
    name: "SEED PLAN",
    price: "$30 per Session ",
    detail: "Lorem Ipsum is simply dummy text LorIpsum has been the industry'",
    Tophead: "INCLUDES",
    subhead:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.LorIpsum has been the industry",
  },
  {
    img: "openmoji_wilted-flower.png",
    name: "SEED PLAN",
    price: "$30 per Session ",
    detail: "Lorem Ipsum is simply dummy text LorIpsum has been the industry'",
    Tophead: "INCLUDES",
    subhead:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LorIpsum has been the industry'",
    bottomhead: "See an Example of this plan",
  },
  {
    img: "noto-v1_sunflower.png ",
    name: "SEED PLAN",
    price: "$30 per Session ",
    detail: "Lorem Ipsum is simply dummy text LorIpsum has been the industry'",
    Tophead: "INCLUDES",
    subhead:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LorIpsum has been the industry'",
    bottomhead: "See an Example of this plan",
  },
];
const Section4 = () => {
  return (
    <Box sx={{ mt: { md: 5, sm: 5, xs: 2 } }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "center", maxWidth: "600px", p: 2 }}>
            <Typography
              component="h1"
              color="#549B7D"
              fontWeight={700}
              mb={1}
              sx={{
                fontFamily: "Roboto",
                fontSize: { md: "25px", sm: "20px", xs: "15px" },
              }}
            >
              Plans & Pricing
            </Typography>
            <Typography
              component="h2"
              fontWeight={400}
              sx={{
                fontFamily: "Abhaya Libre",
                fontSize: { md: "25px", sm: "20", xs: "15px" },
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and type
              settingindustry.Lorum ipsum has been the industry'
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {Data.map((a, i) => (
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={
                  {
                    // position: "relative",
                    // mt: 10,
                    // flexDirection: "column",
                    // textAlign: "center",
                  }
                }
              >
                <img src={a.img} alt="" />

                <Box
                  sx={{
                    background: "white",
                    p: { md: 5, sm: 3, xs: 2 },
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#48007C",
                      fontWeight: 700,
                      fontSize: "25px",
                      textTransform: "uppercase",
                    }}
                  >
                    {a.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "20px",
                      mb: { md: 1, sm: 1, xs: 1 },
                      textTransform: "uppercase",
                    }}
                  >
                    {a.detail}
                  </Typography>
                </Box>

                <Box sx={{ background: "#FAE5DC", p: 5, textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      fontSize: { md: "25px", sm: "20px", xs: "15px" },
                      color: "#549B7D",
                      mb: 1,
                    }}
                  >
                    {a.Tophead}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Abhaya Libre",
                      fontWeight: 400,
                      fontSize: { md: "18px", sm: "15px", xs: "12px" },
                      color: "#000000",
                      mb: 1,
                    }}
                  >
                    {a.subhead}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 400,
                      fontSize: { md: "15px", sm: "12px", xs: "10px" },
                      color: "#F2766D",
                    }}
                  >
                    {a.bottomhead}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: 700,
              fontSize: { md: "20px", sm: "15px", xs: "15px" },
              color: "#549B7D",
              mt: 4,
              mb: { md: 5, sm: 3, xs: 2 },
            }}
          >
            READY TO GET STARTED?
          </Typography>

          <Stack
            direction={{ md: "row", xs: "column", sm: "row" }}
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#549B7D",
                fontFamily: "Roboto",
                fontSize: { md: 16, sm: 13, xs: 12 },
                borderRadius: 6,
                width: "250px",
              }}
            >
              FIND YOUR GARDEN STYLE
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F2766D",
                fontFamily: "Roboto",
                fontSize: { md: 16, sm: 13, xs: 12 },
                borderRadius: 6,
                width: "250px",
              }}
            >
              BROWSE OUR COACHES
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Section4;
