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

<ul className="flex ml-auto space-x-8">
  <li>
    <NavLink
      to="/about"
      className="text-white cursor-pointer hover:bg-white hover:border-4 hover:rounded-lg hover:text-blue-900 hover:border-white"
      activeClassName="text-blue-900"
    >
      About
    </NavLink>
  </li>
</ul>


        <div className="md:hidden">
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
     
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem className="text-white" onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem component={NavLink} to="/about" onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
