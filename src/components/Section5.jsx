import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Img from "./Assets/assets/Rectangle4.png";
import img from "./Assets/assets/Rectangle 23 (2).png";
import imag from "./Assets/assets/Rectangle 16.png";

const Section5 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "White",
        backgroundImage: `url(${Img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: 10,
      }}
    >
      <Container>
        <Box textAlign={{ md: "left", xs: "center" }}>
          <Typography
            sx={{
              fontFamily: "Abhaya Libre",
              fontWeight: 700,
              fontSize: { md: "40px", sm: "25px", xs: "15px" },
              color: "#000000",
              mt: { md: 5, sm: 3, xs: 2 },
              mb: { md: 5, sm: 3, xs: 2 },
              pt:5
            }}
          >
            Join the kitchen garden movement
          </Typography>
        </Box>
        <Grid
          container
          spacing={5}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Grid item md={5} sm={11} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={img} alt="" />
              <Box
                sx={{
                  background: "#FAE5DC",
                  px: { md: 1.8, sm: 1.9, xs: 1.8 },
                }}
                py={2}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "12px",
                    color: "#549B7D",
                  }}
                >
                  Featured Course 
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Abhaya Libre",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#FA8B82",
                  }}
                >
                  Learn to grown your <br /> own garden
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} sm={11} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Abhaya Libre",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#549B7D",
                }}
              >
                Latest News
              </Typography>

              <Box sx={{width:{md:"200px",sm:"100%",xs:"100%"}}}>
                <img
                  src={imag}
                  style={{
                    zIndex: 2,
                    width: "100%",
                  }}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  background: "#FAE5DC",
                  ml: { md: 5, sm: 0, xs: 0 },
                  mt: { md: -4, sm: -2, xs: -1 },
                  display: "flex",
                  justifyContent: { md: "end", sm: "center", xs: "center" },
                }}
              >
                <Typography
                  sx={{
                    color: "#FA8B82",
                    fontFamily: "Abhaya Libre",
                    fontWeight: 700,
                    py: 2,
                    width: "50%",
                    fontSize: "16px",
                  }}
                >
                  Learn to grown <br /> own garden
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={5} sm={11} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Abhaya Libre",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#549B7D",
                }}
              >
                Latest News
              </Typography>

              <Box sx={{width:{md:"200px",sm:"100%",xs:"100%"}}}>
                <img
                  src={imag}
                  style={{
                    zIndex: 2,
                    width: "100%",
                  }}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  background: "#FAE5DC",
                  ml: { md: 4, sm: 0, xs: 0 },
                  mt: { md: -4, sm: -2, xs: -1 },
                  display: "flex",
                  justifyContent: { md: "end", sm: "center", xs: "center" },
                }}
              >
                <Typography
                  sx={{
                    color: "#FA8B82",
                    fontFamily: "Abhaya Libre",
                    fontWeight: 700,
                    py: 2,
                    width: "50%",
                    fontSize: "16px",
                  }}
                >
                  Learn to grown <br /> own garden
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={5} sm={11} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={img} alt="" />
              <Box
                sx={{
                  background: "#FAE5DC",
                  px: { md: 1.8, sm: 1.9, xs: 1.8 },
                }}
                py={2}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "12px",
                    color: "#549B7D",
                  }}
                >
                  Featured Course
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Abhaya Libre",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#FA8B82",
                  }}
                >
                  Learn to grown your <br /> own garden
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: {md:"row",sm:"row",xs:"column"},
            alignItems: "center",
            mt: 8,
            pb:5
          }}
          gap={3}
        >
          <Typography
            sx={{
              fontFamily: "Abhaya Libre",
              fontWeight: 700,
              fontSize: "16px",
              color: "#000000",
            }}
          >
            Want more inspriration? Check out our blog for latest.
          </Typography>
          <Button
            sx={{
              background: "#549B7D",
              borderRadius: 10,
              width: "200px",
              fontSize: "10px",
            }}
            variant="contained"
          >
            FIND YOUR GARDEN STYLE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Section5;
