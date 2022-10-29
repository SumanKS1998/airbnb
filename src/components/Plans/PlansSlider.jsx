import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import StarIcon from "@mui/icons-material/Star";
import one from "../../images/1.webp";
import two from "../../images/2.webp";
import three from "../../images/3.webp";
import four from "../../images/4.webp";
import five from "../../images/5.webp";
import six from "../../images/6.webp";
import seven from "../../images/7.webp";
import eight from "../../images/9.webp";
import nine from "../../images/11.webp";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const PlansSlider = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
  }, []);
  const plansArr = [
    {
      title: "Plan a trip with help from local Hosts around the world",
      image: one,
      rate: 1560,
      rating: 4.5,
    },
    {
      title: "Design your trip to Barcelona with your group of friends",
      image: two,
      rate: 3460,
      rating: 5.1,
    },
    {
      title: "Craft a custom trip to Korea with Jay",
      image: three,
      rate: 1860,
      rating: 3.5,
    },
    {
      title: "Live Tulum like a local",
      image: four,
      rate: 5210,
      rating: 2.5,
    },
    {
      title: "Plan a trip with help from local Hosts around the world",
      image: five,
      rate: 1560,
      rating: 4.5,
    },
    {
      title: "Plan a trip to amazing Austin",
      image: six,
      rate: 1660,
      rating: 5.0,
    },
    {
      title: "Craft a custom trip to Korea with Jay",
      image: seven,
      rate: 1860,
      rating: 3.5,
    },
    {
      title: "Live Tulum like a local",
      image: eight,
      rate: 5210,
      rating: 2.5,
    },
    {
      title: "Plan a trip with help from local Hosts around the world",
      image: nine,
      rate: 1560,
      rating: 4.5,
    },
    {
      title: "Plan a trip to amazing Austin",
      image: six,
      rate: 1660,
      rating: 5.0,
    },
  ];
  return (
    <>
      <motion.div
        className="plans-carousel"
        ref={ref}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {plansArr.map((item, index) => {
            return (
              <motion.div className="plans-card-container" key={index}>
                <Tooltip title='Like'>
                  <IconButton className="plans-heart-icon" >
                    <FavoriteBorderIcon />
                  </IconButton>
                </Tooltip>
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    borderRadius: "10px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <Stack direction="row" alignItems="center" gap={0.5}>
                  <Stack direction="row" alignItems="center">
                    <StarIcon sx={{ fontSize: 15, color: "primary.main" }} />
                    <Typography
                      variant="body2"
                      fontWeight="light"
                      sx={{ color: "primary.main" }}
                      component="span"
                    >
                      {item.rating}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    fontWeight="light"
                    sx={{ color: "secondary.main" }}
                    component="span"
                  >
                    (19)
                  </Typography>
                  <CircleIcon sx={{ fontSize: 4, color: "secondary.main" }} />
                  <Typography
                    variant="body2"
                    fontWeight="light"
                    sx={{ color: "secondary.main" }}
                    component="span"
                  >
                    Spain
                  </Typography>
                </Stack>
                <Typography variant="body1" lineHeight="130%">
                  {item.title.length > 20 && item.title.substring(0, 40)}
                </Typography>
                <Typography>
                  <Typography component="span" fontWeight="bold">
                    From ₹{item.rate}
                  </Typography>
                  /person
                </Typography>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default PlansSlider;
