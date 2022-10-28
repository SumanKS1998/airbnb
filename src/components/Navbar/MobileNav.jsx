import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Container from "@mui/material/Container";
import "../../App.css";
import { Divider } from "@mui/material";
import { Stack } from "@mui/system";
import TuneIcon from "@mui/icons-material/Tune";
const MobileNav = () => {
  return (
    <Container sx={{ display: { xs: "block", md: "none" } }}>
      <Toolbar
        disableGutters
        component={Stack}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowBackIosIcon sx={{ color: "primary.dark", fontSize: 15 }} />
          <Typography
            color="primary.dark"
            sx={{ textDecoration: "underline" }}
            textDecoration="underline"
            variant="body1"
          >
            Add date
          </Typography>
        </Stack>
        <Stack direction="row" gap={2}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ color: "primary.dark" }}
          />
          <TuneIcon sx={{ color: "primary.dark" }} />
        </Stack>
      </Toolbar>
    </Container>
  );
};

export default MobileNav;
