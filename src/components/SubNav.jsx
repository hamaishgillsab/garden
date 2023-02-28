import React, { useState } from "react";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import img from "./Assets/assets/openmoji_gardening-gloves.png";

const pages = ["Start a course", "FinD a Coache"];

const Navbar = () => {
  let [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  console.log(theme);

  const isMatched = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Box
            sx={{
              display: { md: "flex", xs: "flex", sm: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <img src={img} alt="logoimg" />
            <Typography
              sx={{
                flexGrow: 1,
                fontFamily: "Roboto",
                cursor: "pointer",
                textTransform: "capitalize",
                fontWeight: 700,
                fontSize: { md: "30px", xs: "15px", sm: "20px" },
              }}
            >
              GARDEN TREATMENT
            </Typography>
            {isMatched ? (
              <>
                <Drawer
                  anchor="right"
                  open={isDrawerOpen}
                  onClose={() => setIsDrawerOpen(false)}
                >
                  <Box sx={{ width: "100px", marginX: "auto" }}>
                    <img src={img} style={{ width: "100%" }} alt="" />
                  </Box>
                  <List>
                    {pages.map((page, index) => (
                      <ListItemButton key={index}>
                        <ListItemIcon>
                          <ListItemText
                            sx={{
                              width: 220,
                              textAlign: "center",
                              color: "#26643b",
                              padding: "1rem 1rem",
                              fontSize: 20,
                              fontWeight: "bold",
                            }}
                          >
                            {page}
                          </ListItemText>
                        </ListItemIcon>
                      </ListItemButton>
                    ))}
                  </List>
                </Drawer>
                <IconButton
                  edge="start"
                  color="inherit"
                  size="large"
                  aria-label="logo"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {pages.map((page, i) => (
                    <Typography
                      key={i}
                      color="#FA8B82"
                      sx={{
                        cursor: "pointer",
                        textTransform: "capitalize",
                        fontFamily: "Red Hat Text",
                      }}
                    >
                      {page}
                    </Typography>
                  ))}
                </Stack>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
