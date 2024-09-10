import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  InputBase,
  Box,
  MenuItem,
  Select,
  Badge,
} from "@mui/material";
import {
  Search as SearchIcon,
  Info,
  Notifications,
  Settings,
} from "@mui/icons-material";

function Header() {
  return (
    <AppBar
      position="none"
      color="default"
      sx={{
        boxShadow: "none",
        backgroundColor: "#f9fbfd",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "30px",
            padding: "0 10px",
            width: "300px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, flex: 1, fontSize: "14px", color: "#9e9e9e" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Info Icon */}
          <IconButton>
            <Info sx={{ color: "#9e9e9e" }} />
          </IconButton>

          {/* Language Dropdown */}
          <Select
            defaultValue="en"
            variant="standard"
            disableUnderline
            sx={{
              minWidth: 50,
              mx: 2,
              fontSize: "14px",
              color: "#9e9e9e",
              "& .MuiSelect-icon": {
                color: "#9e9e9e",
              },
            }}
          >
            <MenuItem value="en">
              <img
                src="https://www.countryflags.io/gb/flat/24.png"
                alt="English"
                style={{ width: "24px", marginRight: "8px" }}
              />
            </MenuItem>
            <MenuItem value="fr">
              <img
                src="https://www.countryflags.io/fr/flat/24.png"
                alt="French"
                style={{ width: "24px", marginRight: "8px" }}
              />
            </MenuItem>
          </Select>

          {/* Notifications Icon */}
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <Notifications sx={{ color: "#9e9e9e" }} />
            </Badge>
          </IconButton>

          {/* User Profile */}
          <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
            <Avatar
              alt="John Quinn"
              src="https://i.pravatar.cc/300"
              sx={{ width: 40, height: 40 }}
            />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                John Quinn
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Admin Profile
              </Typography>
            </Box>
          </Box>

          {/* Settings Icon */}
          <IconButton>
            <Settings sx={{ color: "#9e9e9e" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
