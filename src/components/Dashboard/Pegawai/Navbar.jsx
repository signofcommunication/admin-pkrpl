import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Back
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
