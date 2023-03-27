import React from "react";
import { Box } from "@mui/material";
import { styled} from "@mui/material/styles";
import SideNav from "../Components/SideNav";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const About = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav/>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
      <DrawerHeader/>
        <h1>About Us Page</h1>
      </Box>
    </Box>
  )
}

export default About
