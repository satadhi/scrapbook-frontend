import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Divider from "@mui/material/Divider";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default function UserInfo() {
  const user = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: "text.secondary", fontSize: 34, fontWeight: "medium" }}>
          <UserImage image="Selection_801.png"></UserImage>
          {user.firstName + " " + user.lastName}
        </Box>
        <Divider variant="middle" />
        <Box sx={{ color: "text.primary", fontSize: 24, fontWeight: "medium" }}>
          {" "}
          <LocationOnIcon /> {user.location}
        </Box>
        <Box sx={{ color: "text.primary", fontSize: 24, fontWeight: "medium" }}>
          {" "}
          <WorkIcon /> {user.occupation}
        </Box>
        <Divider variant="middle" />
      </Box>
    </ThemeProvider>
  );
}
