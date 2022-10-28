import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../images/logo.png";
import "../../App.css";
import airbnb from "../../images/airbnb.png";
import {
  Avatar,
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { Stack } from "@mui/system";
import TuneIcon from "@mui/icons-material/Tune";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
function Navbar() {
  const chipData = [
    "Great for groups",
    "Family-friendly",
    "Animal",
    "Arts & writing",
    "Baking",
    "Cooking",
    "Dance",
    "Drinks",
  ];
  return (
    <AppBar position="sticky" className="navbar">
      {/* ==================Desktop View================== */}
      <DesktopNav />
      {/* ================== Mobile View================== */}
      <MobileNav />
      {/* ==================Chip for Mobile View================== */}
      <Stack
        direction="row"
        gap={1}
        overflow="auto"
        pb={2}
        pl={2}
        display={{ xs: "flex", md: "none" }}
        sx={{
          "::-webkit-scrollbar ": {
            display: "none",
          },
        }}
      >
        {chipData.map((item, index) => (
          <Chip key={index} label={item} />
        ))}
      </Stack>
    </AppBar>
  );
}
export default Navbar;
