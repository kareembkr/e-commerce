import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#283445",
        py: 1.3,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{
          fontSize: 18,
        }}
      >
        Designed and Developed By
        <Button
          href="../../../public/index.html"
          sx={{

            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Karim Bakr
        </Button>
        @2024
      </Typography>
    </Box>
  );
};

export default Footer;
