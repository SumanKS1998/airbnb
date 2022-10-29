import React from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlansSlider from "./PlansSlider";
const Plans = () => {
  return (
    <Box height="100vh">
      <Stack
        component={Container}
        sx={{ mt: { xs: 3, md: 7 } }}
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Typography
          variant="h5"
          fontWeight="medium"
          color="primary.main"
          mb={2}
        >
          Plan a trip with help from local Hosts around the world
        </Typography>
        <Tooltip title="Show all" placement="top">
          <IconButton>
            <ArrowForwardIosIcon sx={{ color: "primary.main", fontSize: 20 }} />
          </IconButton>
        </Tooltip>
      </Stack>
      <PlansSlider />
    </Box>
  );
};

export default Plans;
