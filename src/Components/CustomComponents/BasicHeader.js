import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  LOGIN_SCREEN,
  HOME_SCREEN,
  CALCULATOR,
} from "../../Consatnts/StringConstants";

const BasicHeader = (props) => {
  return (
    <Box
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
    </Box>
  );
};

export default BasicHeader;
