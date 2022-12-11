import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloser = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nicastore Dashboard
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloser}
            >
              <MenuItem>
                <Link
                  to="/barang"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Barang
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/pegawai"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Pegawai
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/supplier"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Supplier
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/penjualan"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Data-Penjualan
                </Link>
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "red",
                  color: "white",
                }} /*onClick={handleLogout}*/
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
