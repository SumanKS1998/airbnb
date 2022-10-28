import { Chip, Divider, Stack } from "@mui/material";
import React from "react";

const BannerChips = () => {
  const chipDataFilled = [
    "Great for groups",
    "Family-friendly",
    "Animal",
    "Arts & writing",
    "Baking",
    "Cooking",
    "Dance",
    "Drinks",
  ];
  const chipDataOutlined = ["Dates", "Group-size", "More filters"];
  return (
    <Stack direction="row" alignItems="center" mt={3} gap={1}>
      <Stack direction="row" gap={1}>
        {chipDataOutlined.map((item, index) => (
          <Chip key={index} label={item} variant="outlined"  sx={{p:1}}/>
        ))}
      </Stack>
      <Divider orientation="vertical" flexItem sx={{ color: "primary.dark" }} />
      <Stack
        direction="row"
        gap={1}
        overflow="auto"
        
        // display={{ xs: "flex", md: "none" }}
        sx={{
          "::-webkit-scrollbar ": {
            display: "none",
          },
        }}
      >
        {chipDataFilled.map((item, index) => (
          <Chip key={index} label={item} sx={{p:1}}/>
        ))}
      </Stack>
    </Stack>
  );
};

export default BannerChips;
