import React from 'react'
import { LoginPage } from './MainApp/LoginPage'
import TablePage from './MainApp/TablePage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import {SignUp} from './MainApp/SignUp';
import { LOGIN_SCREEN, HOME_SCREEN } from '../Consatnts/StringConstants';


export const NavigationSetup = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Router>
          <Grid container>
            <Grid item xs>
            <Link className="App-link" to = {HOME_SCREEN}>
              <Button variant="outlined">
                Home
              </Button>
            </Link>
            </Grid>
            <Grid item>
            <Link className="App-link" to = {LOGIN_SCREEN} variant ="body2">
              <Button variant="outlined">
                Log in
              </Button>
            </Link>
            </Grid>
          </Grid>
          <Routes>
            <Route exact path={HOME_SCREEN} element = {<TablePage/>}/>
            <Route exact path={LOGIN_SCREEN} element = {<LoginPage/>}/>
          </Routes>
        </Router>
        </Box>
    </Container>
  )
}
