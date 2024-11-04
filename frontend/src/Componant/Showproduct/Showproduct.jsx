import { Box, Button, capitalize, Stack, Typography } from "@mui/material";
import React from "react";
import product from "../../image/img5.jpg";
import product2 from "../../image/img6.jpg";
import { AddShoppingCartOutlined } from "@mui/icons-material";
const Showproduct = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,

        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box display={"flex"}>
        <img src={product} width={300} alt="" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMEN‘S FASHOIN</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
          $12.99
        </Typography>
        <Typography variant="body1">
          Subscribe to the Simple eCommerce newsletter to receive timely updates
          from your favorite products.
        </Typography>

        <Stack
          direction={"row"}
          gap={1.5}
          sx={{
            
            my: 2,
            cursor: "pointer",
            justifyContent: { xs: "center", sm: "left" },
          }}
        >
          <img
            style={{ borderRadius: 3 }}
            src={product}
            alt=""
            width={100}
            height={100}
          />
          <img
            style={{ borderRadius: 3 }}
            src={product2}
            alt=""
            width={100}
            height={100}
          />
          <img
            style={{ borderRadius: 3 }}
            src={product2}
            alt=""
            width={100}
            height={100}
          />
        </Stack>
        <Button
          sx={{ textTransform: "capitalize", mb: { xs: 1, ms: 0 } }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default Showproduct;
