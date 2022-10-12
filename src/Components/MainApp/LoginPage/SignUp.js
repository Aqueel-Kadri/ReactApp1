import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Complete } from "./SignUp/Complete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ValidatedTextBox } from "../../CustomComponents/ValidatedTextBox";

export const SignUp = (props) => {
  const [isComplete, setIsComplete] = useState(false);
  const [username, setUsername] = useState('');

  let usernameError = true;
  const setUsernameError = (value) => {
    usernameError = value;
  };
  let emailError = true;
  const setEmailError = (value) => {
    emailError = value;
  };
  let passwordError = true;
  const setPasswordError = (value) => {
    passwordError = value;
  };
  let cnfpasswordError = true;
  const setCnfPasswordError = (value) => {
    cnfpasswordError = value;
  };

  const componentArray = [
    {
      id: "username",
      label: "Username",
      type: "text",
      autoFocus: true,
      errorUpdater: setUsernameError,
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      errorUpdater: setEmailError,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      confirm: true,
      errorUpdater: setPasswordError,
      cnfErrorUpdater: setCnfPasswordError,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get("email"));
    console.log(`usernameError = ${usernameError}\nemailError = ${emailError}\npasswordError = ${passwordError}\ncnfpasswordError = ${cnfpasswordError}`);
    setUsername(data.get("username"))
    console.log(username);
    console.log(!(usernameError || emailError || passwordError || cnfpasswordError));
    setIsComplete(!(usernameError || emailError || passwordError || cnfpasswordError));
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      {isComplete ? (
        <Complete username={username} />
      ) : (
        <>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {componentArray.map((e, i) => (
              <ValidatedTextBox key = {i}
                id={e.id}
                label={e.label}
                autoFocus={e.autoFocus}
                type={e.type}
                validate
                confirm = {e.confirm}
                errorUpdater={e.errorUpdater}
                cnfErrorUpdater={e.cnfErrorUpdater}
              />
            ))}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Button
                onClick={() => {
                  props.setIsSignIn(true);
                }}
              >
                Already a user? Sign in
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};
