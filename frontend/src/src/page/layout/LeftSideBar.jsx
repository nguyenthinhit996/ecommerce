import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Menu,
  Home,
  Dashboard,
  Settings,
} from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";
import WidgetsIcon from "@mui/icons-material/Widgets";
import OtherIcon from "@mui/icons-material/MoreVert";

const drawerWidth = 240;

function Sidebar() {
  const [open, setOpen] = useState(false); // State for drawer collapse/expand
  const [expandMenu, setExpandMenu] = useState({});

  const handleExpandMenu = (menu) => {
    setExpandMenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      id="drawer"
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 100,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 100,
          transition: "width 0.3s",
        },
        "& .MuiPaper-root.MuiPaper-elevation": {
          borderRadius: "1rem",
          position: "unset",
          backgroundColor: "#7258db",
        },
      }}
    >
      <Box id="hihi">
        <Toolbar
          sx={{
            backgroundColor: "#7258db",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
            <Menu />
          </IconButton>
          {open && (
            <Typography variant="h6" noWrap component="div" sx={{ ml: 2 }}>
              Ecommerce
            </Typography>
          )}
        </Toolbar>
        <List sx={{ backgroundColor: "#7258db", color: "white" }}>
          {/* Customers */}
          <ListItem
            button
            onClick={() => handleExpandMenu("customers")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PeopleIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Customers" />}
            {open && (expandMenu.customers ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={expandMenu.customers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="All Customers" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="New Customers" />
              </ListItem>
            </List>
          </Collapse>

          {/* Sales Promotion */}
          <ListItem
            button
            onClick={() => handleExpandMenu("salesPromotion")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StoreIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Sales Promotion" />}
            {open &&
              (expandMenu.salesPromotion ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={expandMenu.salesPromotion} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Active Promotions" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="New Promotions" />
              </ListItem>
            </List>
          </Collapse>

          {/* Inventory */}
          <ListItem
            button
            onClick={() => handleExpandMenu("inventory")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Dashboard />
            </ListItemIcon>
            {open && <ListItemText primary="Inventory" />}
            {open && (expandMenu.inventory ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={expandMenu.inventory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Stock Overview" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="New Stock" />
              </ListItem>
            </List>
          </Collapse>

          {/* Accounts */}
          <ListItem
            button
            onClick={() => handleExpandMenu("accounts")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccountBalanceIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Accounts" />}
            {open && (expandMenu.accounts ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={expandMenu.accounts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Invoices" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Payments" />
              </ListItem>
            </List>
          </Collapse>

          {/* App */}
          <ListItem
            button
            onClick={() => handleExpandMenu("app")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WidgetsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="App" />}
            {open && (expandMenu.app ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={expandMenu.app} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Installed Apps" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="New Apps" />
              </ListItem>
            </List>
          </Collapse>

          {/* Other Pages */}
          <ListItem
            button
            onClick={() => handleExpandMenu("otherPages")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OtherIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Other Pages" />}
            {open && (expandMenu.otherPages ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={expandMenu.otherPages} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="About Us" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
