import { NavLink, useNavigate } from "react-router-dom"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
import User from "./models/user";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SignOut } from "./features/user/signIn";
import { RootState } from "./app/store";

// import { RootState } from "../../app/store";

const Navbar = () => {
  // const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const users: User[] = useSelector((state: RootState) => state.userSlice.users)
  const user = users.find(user => user.tz === localStorage.getItem("USER"))
  const navigate = useNavigate()

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

            <AccountIcon />

            {user ?
              <Select>
                <MenuItem onClick={() => navigate('lendview')}>Lends</MenuItem>
                <MenuItem onClick={SignOut}>Sign Out</MenuItem>
              </Select>
              :
              <Select>
                <MenuItem onClick={() => navigate('signin')}>Sign in</MenuItem>
                <MenuItem onClick={() => navigate('signup')}>Sign Up</MenuItem>
              </Select>
            }

            {user && <div>{user.firstName + ' ' + user.lastName}</div>}

          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
          {/* <div> {currentUser}</div> */}
          {/* </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
          <NavLink to="/homePage" id="navlink" style={{ position: 'fixed', right: '50vw' }}>    Home   </NavLink>
          <NavLink to="/ToolView" id="navlink" style={{ position: 'fixed', right: '10vw' }}>    Catalog   </NavLink>
          {/* <NavLink to="/LendView" id="navlink">    Lends   </NavLink> */}
          {/*user ?
            <div>{user.firstName + ' ' + user.lastName}</div>
            : <>
              <NavLink to="/signin" id="navlink"> Sign In  </NavLink>
              <NavLink to="/signup" id="navlink">   Sign Up   </NavLink>
            </>
          */}
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Navbar;