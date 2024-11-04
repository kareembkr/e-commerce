import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import Showproduct from "../Showproduct/Showproduct";

const Main = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container
      sx={{
        py: 8,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivais in a exclusive brand selection
          </Typography>
        </Box>
        <Box>
          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px  solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              className="home"
              value="left"
              aria-label="left aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{
                mx: "16px !important",
                color: theme.palette.text.primary,
              }}
              className="home"
              value="center"
              aria-label="centered"
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              className="home"
              value="right"
              aria-label="right aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {["aaa", "hhh", "dfdfdf","jjjj","KKK","DDD"].map((item) => {
          return (
            <Card
              key={item}
              sx={{   
                maxWidth: 333,
                mt: 5,
                ":hover .MuiCardMedia-root  ": {
                  scale: "1.1",
                  transition: "0.35s",
                  rotate: "1.5deg",
                },
              }}
            >
              <CardMedia
                sx={{ height: 280 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    T-shirt
                  </Typography>
                  <Typography gutterBottom variant="subtitel" component="p">
                    $12.99
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: "row",
                  alignItemsL: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={handleClickOpen}
                  sx={{
                    textTransform: "capitalize",
                  }}
                  size="small"
                >
                  <AddShoppingCartIcon
                    sx={{
                      mr: 1,
                      fontSize: "22px",
                    }}
                  />
                  Add To Cart
                </Button>

                <Button
                  sx={{
                    textTransform: "capitalize",
                  }}
                  size="small"
                >
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "100%", md: 800 },
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 9,
            ":hover": {
              color: "red",
              rotate: "180deg",
              transition: "0.3s",
            },
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <Showproduct />
      </Dialog>
    </Container>
  );
};

export default Main;
