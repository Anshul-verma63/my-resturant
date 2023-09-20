import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "black", color: "white", py: 2 }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": {
              fontSize: "2.5rem",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all .3s",
            },
          }}
        >
          <InstagramIcon />
          <GitHubIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; My Resturant
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
