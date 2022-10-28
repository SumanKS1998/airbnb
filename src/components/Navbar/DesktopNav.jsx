import * as React from "react";
 import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
 import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../images/logo.png";
import "../../App.css";
import airbnb from "../../images/airbnb.png";
import {
  Avatar,
  Button,
   IconButton,
  List,
  ListItem,
} from "@mui/material";
import { Stack } from "@mui/system";
  const DesktopNav = () => {
  return (
    <Container sx={{ display: { xs: "none", md: "block" } }}>
    <Toolbar
      disableGutters
      component={Stack}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        component="img"
        src={logo}
        width="150px"
        display={{ xs: "none", lg: "block" }}
      />
      <Box
        component="img"
        src={airbnb}
        width="35px"
        display={{ xs: "none", md: "block", lg: "none" }}
      />
      <List component={Stack} direction="row" alignItems="center">
        <ListItem>
          <Typography
            variant="body2"
            width="max-content !important"
            color="#222222"
            fontWeight="medium"
          >
            Become a Host
          </Typography>
        </ListItem>
        <ListItem>
          <IconButton>
            <LanguageIcon sx={{ fontSize: 20, color: "#222222" }} />
          </IconButton>
        </ListItem>
        <ListItem>
          <Button className="nav-btn">
            <MenuIcon sx={{ fontSize: 20, color: "#222 " }} />
            <Avatar sx={{ width: 34, height: 34 }} />
          </Button>
        </ListItem>
      </List>
    </Toolbar>
  </Container>
  )
}

export default DesktopNav