import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Complete } from "./Complete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ValidatedTextBox } from "../../../CustomComponents/ValidatedTextBox";
import { connect } from "react-redux";
import { registerUser } from "../../../../redux/Actions/asyncActions";
import { LoadingScreen } from "../../../CustomComponents/LoadingScreen";

const SignUp = (props) => {
  const [isComplete, setIsComplete] = useState(false);
  // const [username, setUsername] = useState('');
  // const [render, setRender] = useState(false);

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
      defaultValue: props.emailEntered,
      errorUpdater: setUsernameError,
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      defaultValue: props.emailEntered,
      errorUpdater: setEmailError,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      confirm: true,
      defaultValue: "",
      errorUpdater: setPasswordError,
      cnfErrorUpdater: setCnfPasswordError,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get("email"));
    console.log(
      `usernameError = ${usernameError}\nemailError = ${emailError}\npasswordError = ${passwordError}\ncnfpasswordError = ${cnfpasswordError}`
    );
    // setUsername(data.get("username"))
    // console.log(username);
    console.log(
      !(usernameError || emailError || passwordError || cnfpasswordError)
    );
    if (!(usernameError || emailError || passwordError || cnfpasswordError)) {
      const formData = {
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password"),
      };
      console.log(JSON.stringify(formData));

      props.registerUser(formData);
      setIsComplete(true);
    }
    // setRender(!render);
  };

  return (
    <>
      {console.log("rendering")}
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
        {isComplete && !props.loading ? (
          <Complete userDetails={props.userDetails} />
        ) : (
          <>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              {componentArray.map((e, i) => (
                <ValidatedTextBox
                  key={i}
                  defaultValue={e.defaultValue}
                  id={e.id}
                  label={e.label}
                  autoFocus={e.autoFocus}
                  type={e.type}
                  validate
                  confirm={e.confirm}
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
      <LoadingScreen open={props.loading} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    // userDetails: state.userDetails,
    error: state.error,
    // token: state.token,
    // isUser: state.isUser,
    emailEntered: state.emailEntered,
  };
};

export default connect(mapStateToProps, { registerUser })(SignUp);
