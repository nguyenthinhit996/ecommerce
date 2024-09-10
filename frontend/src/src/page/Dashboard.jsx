import React from "react";
import Sidebar from "./layout/LeftSideBar";
import { Box, Stack, Typography } from "@mui/material";
import Header from "./layout/Header";
import AdminProfile from "../../components/AdminProfile";

function Home() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ padding: "2rem" }}>
        <Sidebar />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box>
          <Header></Header>
        </Box>
        <Box>
          <AdminProfile />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
