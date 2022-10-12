import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ValidatedTextBox } from "../../CustomComponents/ValidatedTextBox";
import { Users } from "../../../Config/DummyData";

export const SignIn = (props) => {
  const [canLogin, setCanLogin] = useState(false);

  const componentArray = [
    {
      id: "email",
      label: "Email",
      type: "text",
      autoFocus: true,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let currentEmail = data.get("email");
    let currentPassword = data.get("password");
    let emailList = Users.map((e) => e.email);
    let passwordList = Users.map((e) => e.password);

    let emailIndex = emailList.indexOf(currentEmail);
    let passwordIndex = passwordList.indexOf(currentPassword);

    console.log(
      `Email Index = ${emailIndex}\nPassword Index = ${passwordIndex}`
    );

    if (emailIndex !== -1) {
      if (emailIndex === passwordIndex) {
        console.log("can Login");
        setCanLogin(true);
      } else {
        console.log("incorrect password");
      }
    } else {
      console.log("Email Id doesn't exist.");
    }
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
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {componentArray.map((e, i) => (
          <ValidatedTextBox
            key={i}
            id={e.id}
            label={e.label}
            autoFocus={e.autoFocus}
            type={e.type}
          />
        ))}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Button>Forgot password?</Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                props.setIsSignIn(false);
              }}
            >
              Create Account
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
