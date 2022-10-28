import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useRef, useState } from "react";
import "../../App.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { banners } from "./BannersArray";
import BannerChips from "./BannerChips";
const Banners = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
  }, []);

  return (
    <>
      <Container sx={{ mt: 3 }}>
        <Typography variant="h4" fontWeight="medium" color="primary.main">
          New this week
        </Typography>
      </Container>
      <motion.div
        whileTap={{ cursor: "grabbing" }}
        ref={ref}
        className="carousel"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {banners.map((item, index) => {
            return (
              <motion.div className="banner-container" key={index}>
                <Box component="img" src={item.image} className="banner-img" />
                <Stack
                  position="relative"
                  className="banner-txt-container"
                  zIndex={2}
                >
                  <Stack>
                    <Typography
                      variant="caption"
                      color="primary.light"
                      fontWeight="light"
                    >
                      Collection
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight="medium"
                      color="primary.light"
                      width={{ xs: "100%", md: "70%" }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                  <Button className="banner-btn">Show all</Button>
                </Stack>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <Container sx={{ display: { xs: "none", md: "block" } }}>
        <BannerChips />
      </Container>
    </>
  );
};

export default Banners;
