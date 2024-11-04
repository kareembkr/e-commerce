import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import theimages from "../../image/img3.jpg";
import theimages2 from "../../image/img4.jpg";
import theimages3 from "../../image/img1.png";
import theimages4 from "../../image/img1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../Hero/hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./hero.css";
import IconSction from "./IconSction";

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
      >
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={theimages3} alt="" />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  top: 100,
                  left: "10%",
                  textAlign: "left",
                },
                [theme.breakpoints.down("sm")]: {
                  pt: 4,
                  pb: 6,
                },
              }}
              // sx={{}}
            >
              <Typography
                sx={{
                  color: "#222",
                }}
                variant="h5"
              >
                LIFESTYLE COLLECTION
              </Typography>
              <Typography
                sx={{
                  color: "#222",
                  fontWeight: 700,
                  my: 1,
                }}
                variant="h2"
              >
                MAN
              </Typography>
              <Stack
                sx={{
                  justifyContent: "center",
                }}
                direction={"row"}
                alignItems={"center"}
              >
                <Typography color={"#333"} mr={1} variant="h4">
                  SALE UP TO
                </Typography>
                <Typography color={"rgb(210, 63, 87)"} variant="h4">
                  30% OFF
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 300,
                  mt: 1,
                }}
                variant="body1"
              >
                Get free shipping on orders over $900.00
              </Typography>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 4,
                  bgcolor: "#151515",
                  boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  color: "#fff",
                  borderRadius: "1PX",
                  "&:hover": {
                    bgcolor: "#222",

                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  },
                }}
                variant="contained"
              >
                Shop New
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <img src={theimages4} alt="" className="swiper-slider" />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  top: 100,
                  left: "10%",
                  textAlign: "left",
                },
                [theme.breakpoints.down("sm")]: {
                  pt: 4,
                  pb: 6,
                },
              }}
              // sx={{}}
            >
              <Typography
                sx={{
                  color: "#222",
                }}
                variant="h5"
              >
                LIFESTYLE COLLECTION
              </Typography>
              <Typography
                sx={{
                  color: "#222",
                  fontWeight: 700,
                  my: 1,
                }}
                variant="h2"
              >
                WOMAN
              </Typography>
              <Stack
                sx={{
                  justifyContent: "center",
                }}
                direction={"row"}
                alignItems={"center"}
              >
                <Typography color={"#333"} mr={1} variant="h4">
                  SALE UP TO
                </Typography>
                <Typography color={"rgb(210, 63, 87)"} variant="h4">
                  30% OFF
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 300,
                  mt: 1,
                }}
                variant="body1"
              >
                Get free shipping on orders over $900.00
              </Typography>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 4,
                  bgcolor: "#151515",
                  boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  color: "#fff",
                  borderRadius: "1PX",
                  "&:hover": {
                    bgcolor: "#222",

                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  },
                }}
                variant="contained"
              >
                Shop New
              </Button>
            </Box>
          </SwiperSlide>
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img src={theimages} alt="" width={"100%"} />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: " translateY(-50%)",
                left: "25px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "13px",
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#283445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#283445" }}>
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "rgb(210, 63, 87)",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop now
                <ArrowForwardIcon
                  sx={{
                    position: "absolute",
                    fontSize: "14px",
                    bottom: "4px",
                    left: "80px",
                  }}
                />
              </Link>
            </Stack>
          </Box>

          <Box
            sx={{
              position: "relative",
            }}
          >
            <img src={theimages2} alt="" width={"100%"} />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: " translateY(-50%)",
                left: "25px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "13px",
                }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#283445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>
              <Typography variant="h6" sx={{ color: "#283445" }}>
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "rgb(210, 63, 87)",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop now
                <ArrowForwardIcon
                  sx={{
                    position: "absolute",
                    fontSize: "14px",
                    bottom: "4px",
                    left: "80px",
                  }}
                />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSction />
    </Container>
  );
};

export default Hero;
