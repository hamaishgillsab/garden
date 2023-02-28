import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

let Data = [
  {
    img: "Rectangle 13.png",
  },
  {
    img: "Rectangle 14.png",
  },
  {
    img: "Rectangle 15.png",
  },
  {
    img: "Rectangle 16.png",
  },
];
const Section3 = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          background: "#549B7D",
          padding: { md: 10, sm: 6, xs: 4 },
          mt: { md: 15, sm: 10, xs: 5 },
          pb: { md: 20, sm: 15, xs: 5 },
        }}
      >
        <Typography
          fontWeight={700}
          component="h1"
          color="white"
          sx={{
            textTransform: "capitalize",
            mb: 2,
            fontFamily: "Roboto",
            fontSize: { md: "25px", sm: "20px", xs: "15px" },
            textAlign: "center",
          }}
        >
          Lorum Ipsum is Simply Dummy
        </Typography>

        <Typography
          sx={{
            fontSize: { md: "25px", sm: "20px", xs: "10px" },
            textAlign: "center",
          }}
          fontWeight={400}
          component="h1"
          color="white"
          fontFamily="Abhaya Libre"
        >
          Lorem Ipsum is simply dummy text of the printing and type
          settingindustry.Lorum ipsum has been the industry'
        </Typography>
      </Box>

      <Stack
        direction="row"
        mt={{ md: -13, sm: -10, xs: -5 }}
        gap={4}
        justifyContent={{ md: "space-evenly", sm: "center", xs: "center" }}
        flexWrap="wrap"
        p={{ md: 0, sm: 0, xs: 3 }}
      >
        {Data.map((a) => (
          <img
            style={{ maxWidth: "300px", width: "100%" }}
            alt="The house from the offer."
            src={a.img}
          />
        ))}
      </Stack>
    </>
  );
};

export default Section3;
