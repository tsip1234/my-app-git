import { NavLink } from "react-router-dom"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";
// import { RootState } from "../../app/store";

const Navbar = () => {
  // const currentUser = useSelector((state: RootState) => state.user.currentUser);
  let user = null;
  let status = 1;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
          {/* <div> {currentUser}</div> */}
          {/* </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
          <NavLink to="/signin" id="navlink"> Sign In  </NavLink>
          <NavLink to="/signup" id="navlink">   Sign Up   </NavLink>
          <NavLink to="/homePage" id="navlink">    Home   </NavLink>
          <NavLink to="/ToolView" id="navlink">    Tools   </NavLink>
          <NavLink to="/LendView" id="navlink">    Lends   </NavLink>
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Navbar;