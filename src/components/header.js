import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/weather.ico';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
      <Link to="/" style={{ textDecoration: 'none' }}>
    <Typography
  component="div"
  className="logo"
  sx={{
    flexGrow: 1,
    cursor: 'pointer',
  }}
>
  <img src={logo} alt="Weather App Logo" className="logo-image" />
</Typography>
</Link>




       
      </Toolbar>
    </AppBar>
  );
};

export default Header;
