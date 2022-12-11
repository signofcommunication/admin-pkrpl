import React from "react";
import Navbar from "./Navbar/Navbar";
import { Typography } from "@mui/material";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "80vh",
          justifyContent: "center",
        }}
      >
        <Typography style={{ textAlign: "center" }}>
          Welcome to Nicastore Dashboard
        </Typography>
      </div>
    </>
  );
}

export default Dashboard;
