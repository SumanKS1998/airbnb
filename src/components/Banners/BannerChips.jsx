import { Chip, Divider, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
  }, []);
  return (
    <Stack direction="row" alignItems="center" mt={3} gap={1}>
      <Stack direction="row" gap={1}>
        {chipDataOutlined.map((item, index) => (
          <Chip key={index} label={item} variant="outlined" sx={{ p: 1 }} />
        ))}
      </Stack>
      <Divider orientation="vertical" flexItem sx={{ color: "primary.dark" }} />
      <motion.div
        whileTap={{ cursor: "grabbing" }}
        ref={ref}
        className="banner-chip-carousel"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <motion.div className="banner-chip-container">
            {chipDataFilled.map((item, index) => (
              <Chip key={index} label={item} sx={{ p: 1 }} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </Stack>
  );
};

export default BannerChips;
