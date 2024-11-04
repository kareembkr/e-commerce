import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const IconSction = () => {
  const theme = useTheme();

  return (
    <Container sx={{
      
      mt:2,
      bgcolor: theme.palette.mode ==="dark"? "#000" : "#fff" }}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignContent={"center"}
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery "}
          sutitle={"Start from $10 "}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          title={"Money Guarantee "}
          sutitle={"7 Days Back "}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon fontSize="large" />}
          title={"365 Days "}
          sutitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
          title={"Payment "}
          sutitle={"Secure system "}
        />
      </Stack>
    </Container>
  );
};

export default IconSction;

const MyBox = ({ icon, title, sutitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        py: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {sutitle}
        </Typography>
      </Box>
    </Box>
  );
};
