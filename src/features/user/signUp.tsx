import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../models/user';
import { getUsers, createUser } from './userSlice';
import { setSignIn } from './signIn';
import { useNavigate } from 'react-router-dom';
import { ErrorSharp } from '@mui/icons-material';
// import uuid from 'react-uuid';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }} >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector((state: RootState) => state.userSlice.users)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    //});
    // let u: User = { id: 123, tz: '', password: '123', firstName: '123', lastName: '123', phoneNumber: '123', mail: 'aa', status: 0 };
    const tz = data.get('tz') as string
    const firstName = data.get('firstName') as string
    const lastName = data.get('lastName') as string
    const mail = data.get('email') as string
    const phoneNumber = data.get('phoneNumber') as string
    const password = data.get('password') as string
    const creditCard = data.get('creditCard') as string

    const errors = []
    if (firstName === '') errors.push('First Name is Required')
    if (lastName === '') errors.push('Last Name is Required')
    if (tz.length !== 9 || /\D/.test(tz)) errors.push('ID is 9 digits')
    if (users.find(user => user.tz === tz)) errors.push('ID Already Exists')
    if (phoneNumber.length !== 10 || /\D/.test(phoneNumber)) errors.push('Phone Number is 10 digits')
    if (creditCard === '') errors.push('Credit Card is Required')
    if (!/[a-z0-9.]+@[a-z]+\.[a-z]+/i.test(mail)) errors.push('Email is Not Valid')
    if (users.find(user => user.mail === mail)) errors.push('Email Already Exists')
    if (password.length < 8) errors.push('Password Must Contain at least 8 Characters')

    if (errors.length) {
      document.getElementById('errors')!.innerHTML = errors[0]
      return
    }

    dispatch(createUser({
      // id: +uuid().split('-')[0],
      firstName,
      lastName,
      creditCard: Number(creditCard),
      mail,
      password,
      phoneNumber,
      status: 1,
      tz
    }));
    setSignIn(tz)

  };

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div id="errors" style={{ color: 'red' }}></div>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="tz"
                  required
                  fullWidth
                  id="tz"
                  label="ID"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="phoneNumber"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="creditCard"
                  required
                  fullWidth
                  id="creditCard"
                  label="Credit Card"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}


