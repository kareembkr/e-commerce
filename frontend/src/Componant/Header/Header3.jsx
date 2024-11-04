import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WindowIcon from "@mui/icons-material/Window";
import DiamondIcon from "@mui/icons-material/Diamond";
import ComputerIcon from "@mui/icons-material/Computer";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PetsIcon from "@mui/icons-material/Pets";
import StrollerIcon from "@mui/icons-material/Stroller";
import GrassIcon from "@mui/icons-material/Grass";
import {
  LaptopChromebookOutlined,
  Close,
  ExpandMore,
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "./Link";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 6,
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: 240,
          bgcolor: theme.palette.myColor.main,
          color: theme.palette.text.primary,
        }}
      >
        <WindowIcon />
        <Typography
          sx={{
            p: 0,
            textTransform: "capitalize",
            mx: 1,
          }}
        >
          Categories
        </Typography>
        <Box flexGrow={1} />

        <KeyboardArrowRightIcon />
      </Button>

      <Menu
        className="text"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": { width: 240, bgcolor: theme.palette.myColor.main },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DiamondIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Fashion
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ComputerIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Electronics
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TwoWheelerIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Bikes
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HomeIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Home & Garden
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CardGiftcardIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Gifts
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FitnessCenterIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Health &Beauty
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PetsIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Pets
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <StrollerIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Baby
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <GrassIcon
              sx={{
                color: theme.palette.text.primary,
              }}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.text.primary,
            }}
            temText
          >
            Graceries
          </ListItemText>
        </MenuItem>
      </Menu>
      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Link
            tilte={"Home"}
            subtitle={"Market"}
            list1={"Market 1"}
            list2={"Market 2"}
            list3={"Market 3"}
            title2={"Gadget"}
            Gadget1={"Gadget 1"}
            Gadget2={"Gadget 2"}
            Gadget3={"Gadget 3"}
            Grocery={"Grocery"}
            Grocery1={"Grocery 1"}
            Grocery2={"Grocery 2"}
            Grocery3={"Grocery 3"}
            Fashion={"Fashion"}
            Fashion1={"Fashion 1"}
            Fashion2={"Fashion 2"}
            Fashion3={"Fashion 3"}
            Store={"Gift Store"}
            Health={"Health and Beauty"}
          />

          <Link
            tilte={"Mega Menu"}
            subtitle={"Menu"}
            list1={"Menu 1"}
            list2={"Menu 2"}
            list3={"Menu 3"}
            title2={"Baby"}
            Gadget1={"Baby 1"}
            Gadget2={"Baby 2"}
            Gadget3={"Baby 3"}
            Grocery={"Pets"}
            Grocery1={"Pets 1"}
            Grocery2={"Pets 2"}
            Grocery3={"Pets 3"}
            Fashion={"Gift"}
            Fashion1={"Gift 1"}
            Fashion2={"Gift 2"}
            Fashion3={"Gift 3"}
            Store={"Electronics Store"}
            Health={"Bikes"}
          />
          <Link
            tilte={"Full Screen Menu"}
            subtitle={"Menu"}
            list1={"Menu 1"}
            list2={"Menu 2"}
            list3={"Menu 3"}
            title2={"Baby"}
            Gadget1={"Baby 1"}
            Gadget2={"Baby 2"}
            Gadget3={"Baby 3"}
            Grocery={"Pets"}
            Grocery1={"Pets 1"}
            Grocery2={"Pets 2"}
            Grocery3={"Pets 3"}
            Fashion={"Gift"}
            Fashion1={"Gift 1"}
            Fashion2={"Gift 2"}
            Fashion3={"Gift 3"}
            Store={"Electronics Store"}
            Health={"Bikes"}
          />
          <Link
            tilte={"Pages"}
            subtitle={"Menu"}
            list1={"Menu 1"}
            list2={"Menu 2"}
            list3={"Menu 3"}
            title2={"Baby"}
            Gadget1={"Baby 1"}
            Gadget2={"Baby 2"}
            Gadget3={"Baby 3"}
            Grocery={"Pets"}
            Grocery1={"Pets 1"}
            Grocery2={"Pets 2"}
            Grocery3={"Pets 3"}
            Fashion={"Gift"}
            Fashion1={"Gift 1"}
            Fashion2={"Gift 2"}
            Fashion3={"Gift 3"}
            Store={"Electronics Store"}
            Health={"Bikes"}
          />
          <Link
            tilte={"User Account"}
            subtitle={"Market"}
            list1={"Market 1"}
            list2={"Market 2"}
            list3={"Market 3"}
            title2={"Gadget"}
            Gadget1={"Gadget 1"}
            Gadget2={"Gadget 2"}
            Gadget3={"Gadget 3"}
            Grocery={"Grocery"}
            Grocery1={"Grocery 1"}
            Grocery2={"Grocery 2"}
            Grocery3={"Grocery 3"}
            Fashion={"Fashion"}
            Fashion1={"Fashion 1"}
            Fashion2={"Fashion 2"}
            Fashion3={"Fashion 3"}
            Store={"Gift Store"}
            Health={"Health and Beauty"}
          />
          <Link
            tilte={"Vendor Account"}
            subtitle={"Market"}
            list1={"Market 1"}
            list2={"Market 2"}
            list3={"Market 3"}
            title2={"Gadget"}
            Gadget1={"Gadget 1"}
            Gadget2={"Gadget 2"}
            Gadget3={"Gadget 3"}
            Grocery={"Grocery"}
            Grocery1={"Grocery 1"}
            Grocery2={"Grocery 2"}
            Grocery3={"Grocery 3"}
            Fashion={"Fashion"}
            Fashion1={"Fashion 1"}
            Fashion2={"Fashion 2"}
            Fashion3={"Fashion 3"}
            Store={"Gift Store"}
            Health={"Health and Beauty"}
          />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon
            sx={{
              fontSize: "25px",
            }}
          />
        </IconButton>
      )}    
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1qdun2q-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
              height: "100%",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 440,
            mx: "auto",
            mt: 6,
            pt: 8,
          }}
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
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
          {[
            {
              mainLink: "Home",
              subLink: [
                "Market",
                "Gadget",
                "Grocery",
                "Fashion",
                "Furniture",

              ],
            },
            {
              mainLink: "Mega Menu",
              subLink: [
                "Home",
                "User Account ",
                "Vendor Account",
                "Products",
                "Orders",

              ],
            },
            {
              mainLink: "Pages",
              subLink: ["Sale Page", "Vendor", "Shop", "Auth"],
            },
            {
              mainLink: "User Account",
              subLink: [
                "Orders",
                "Profile",
                "Adderss",
                "Support tickets",
                "Wishlist",
              ],
            },
            {
              mainLink: "Vendor Account",
              subLink: ["Dashboard", "Products", "Orders", "Profile"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item}
                elevation={0}
                sx={{
                  bgcolor: "initial",
                  pt: 0,
                }}
              >
                <AccordionSummary
                  sx={{
                    pt: 0,
                    mt: 0,
                    ":hover": {
                      color: "red",
                    },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ p: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ my: 0 }}>
                        <ListItemButton
                          sx={{
                            ":hover": {
                              color: "red",
                            },
                          }}
                        >
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
