import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// import Form from "../Pages/Form";
// import Dashboard from "../Pages/Dashboard";
// import Contact from "../Pages/Contact";
// // import Services from "../Pages/Services";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
// import StoreConfig from "../Pages/StoreConfig";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideNav = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Clinical Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={isOpen}>
        <DrawerHeader>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/");
            }}
            // onClick={() => setMenudata("Dashboard")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/form")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
              // onClick={handleClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText
                primary="Appointment"
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
              {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  // onClick={(event) => {
                  //   setMenudata("Form");
                  //   handleListItemClick(event, 2);
                  // }}
                  // selected={selectedIndex === 2}
                >
                  <ListItemIcon>
                    <PersonAddAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Book Appointment" />
                </ListItemButton>
              </List>
            </Collapse>
          </ListItem> */}

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/form");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonAddAltIcon />
              </ListItemIcon>
              <ListItemText
                primary="Book Appointment"
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <Divider />
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/storeConfig");
            }}
            // onClick={() => setMenudata("Store Configuration")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
              // selected={selectedIndex === 3}
              // onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText
                primary="Store Configuration"
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/contact");
            }}
            // onClick={() => setMenudata("Contact")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
              // selected={selectedIndex === 4}
              // onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AddIcCallIcon />
              </ListItemIcon>
              <ListItemText
                primary="Contact"
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/services");
            }}
            // onClick={() => setMenudata("Services")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
              // selected={selectedIndex === 5}
              // onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MedicalServicesIcon />
              </ListItemIcon>
              <ListItemText
                primary="Services"
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNav;
