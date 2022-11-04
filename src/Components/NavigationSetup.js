import LoginPage from "./MainApp/LoginPage/LoginPage";
import TablePage from "./MainApp/TablePage/TablePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  Navigate,
} from "react-router-dom";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  LOGIN_SCREEN,
  HOME_SCREEN,
  CALCULATOR,
} from "../Consatnts/StringConstants";
import { connect } from "react-redux";
import { logOut } from "../redux/Actions/asyncActions";
import Calculator from "./MainApp/Calculator/Calculator";
import "../Flex.css";
import { Typography } from "@mui/material";
// import SearchAppBar from "./CustomComponents/SearchBar";
import NavBar from "./CustomComponents/NavBar";
// import BasicHeader from "./CustomComponents/BasicHeader";

const pages = [
  {
    label: "Home",
    to: HOME_SCREEN,
  },
  {
    label: "Calculator",
    to: CALCULATOR,
  },
];

const NavigationSetup = (props) => {
  
  return (
    <Container component="main" maxWidth="sm">
      <Router>
        {/* <SearchAppBar /> */}
        <NavBar pages={pages} />
        {/* <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link className="App-link" to={HOME_SCREEN}>
            <Button variant="outlined">Home</Button>
          </Link>
          <Link className="App-link" to={CALCULATOR}>
            <Button variant="outlined">Calculator</Button>
          </Link>
          {props.isUser ? (
            <>
              <Button
                variant="contained"
                onClick={() => {
                  props.logOut();
                }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Link className="App-link" to={LOGIN_SCREEN} variant="body2">
              <Button variant="outlined">Log in</Button>
            </Link>
          )}
        </Box> */}
        {/* <BasicHeader/> */}
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.isUser && (
            <Typography variant="overline">
              Welcome, {props.username}
            </Typography>
          )}
          <Routes>
            <Route
              exact
              path={HOME_SCREEN}
              element={
                props.isUser ? <TablePage /> : <Navigate to={LOGIN_SCREEN} />
              }
            />
            <Route exact path={LOGIN_SCREEN} element={<LoginPage />} />
            <Route exact path={"/green"} element={<>hi green</>} />
            <Route
              exact
              path={CALCULATOR}
              element={
                props.isUser ? <Calculator /> : <Navigate to={LOGIN_SCREEN} />
              }
            />
          </Routes>
        </Box>
      </Router>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isUser: state.isUser,
    username: state.userDetails.username,
  };
};

export default connect(mapStateToProps, { logOut })(NavigationSetup);
