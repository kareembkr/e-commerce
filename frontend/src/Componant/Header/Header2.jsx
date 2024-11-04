import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Container,
  Stack,
  Typography,
  Badge,
  InputBase,
  IconButton,
  ListItem,
  useTheme,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: " 1px solid #777",
  "&:hover": {
    border: " 1px solid #333",


  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  minWidth: "300px ",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "600px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = [
  "All Categories",
  "Car",
  "Clothes",
  "ELectronics",
  "Laptop",
  "Desktop",
  "Camera",
  "Toys",
];

const Header2 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack
        alignItems={"center"}
        sx={{
          cursor: "pointer",
        }}
      >
        <ShoppingCartOutlined
          sx={{
            color: theme.palette.coloricon.main,
            width:30,
            height:30,

          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.coloricon.main,
            fontSize:20,
          }}
        >
          Simple
        </Typography>
      </Stack>

      <Stack>
        <Search
          className="search"
          sx={{
            borderRadius: "22px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />

          <List
            className="border"
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: theme.palette.myColor.main,
              borderTopRightRadius: "22px",
              borderBottomRightRadius: "22px",
              p: 0,
            }}
          >
            <ListItem
              sx={{
                cursor: "pointer",
              }}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{
                  width: 93,
                  textAlign: "center",
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{}} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Search>
      </Stack>

      <Stack flexDirection={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge
            sx={{
              color: theme.palette.coloricon.main,
            }}
            badgeContent={4}
            color="error"
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton>
          <PersonIcon
            sx={{
              color: theme.palette.coloricon.main,
            }}
          />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;
