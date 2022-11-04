import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { Users } from "../../../Config/DummyData";
import { TextField } from "@mui/material";
import {
  EMAIL,
  INCORRECT,
  INVALID_PASSWORD,
  INVALID_USER,
  JOIN,
  PASSWORD,
  REQUIRED,
} from "../../../Consatnts/StringConstants";
// import { setUsername } from "../../../redux/Actions/userAction";
import { connect } from "react-redux";
import PasswordVisibility from "../../CustomComponents/PasswordVisibility";
import api from "../../../Utils/apiUtil";
import { authenticateUser } from "../../../redux/Actions/asyncActions";
import { LoadingScreen } from "../../CustomComponents/LoadingScreen";
import { setEmailEntered } from "../../../redux/Actions/Actions";
import { AlignHorizontalLeftSharp } from "@mui/icons-material";
// import { redirect } from "react-router-dom";
// import { HOME_SCREEN } from "../../../Consatnts/StringConstants";

const SignIn = (props) => {
  const [errorArray, setErrorArray] = useState([
    {
      error: false,
      helperText: "",
    },
    {
      error: false,
      helperText: "",
    },
  ]);

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
  // const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const switchVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let stateObj = [
      {
        error: false,
        helperText: "",
      },
      {
        error: false,
        helperText: "",
      },
    ];

    let formData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (formData.email === "") {
      alert(JOIN(EMAIL + REQUIRED));
    } else {
      await props.authenticateUser(formData);
      console.log("after await");
      if (props.error === INVALID_PASSWORD) {
        stateObj[1].error = true;
        stateObj[1].helperText = JOIN(PASSWORD + INCORRECT);
        setErrorArray(stateObj);
      } else if (props.error === INVALID_USER) {
        props.setEmailEntered(formData.email);
        props.setIsSignIn(false);
      }
    }
  };
  //   let emailList = Users.map((e) => e.email);
  //   // let passwordList = Users.map((e) => e.password);

  //   let emailIndex = emailList.indexOf(currentEmail);
  //   // let passwordIndex = passwordList.indexOf(currentPassword);

  //   console.log(`Current Email = ${currentEmail}\nEmail Index = ${emailIndex}`);

  //   if (emailIndex !== -1) {
  //     let userPassword = Users[emailIndex].password;
  //     if (userPassword === currentPassword) {
  //       console.log("can Login");
  //       // props.setUsername(Users[emailIndex].username);
  //       // dispatch(setUsername(Users[emailIndex].username));

  //       console.log(`Username in handle submit 1 = ${props.username}`);
  //       props.setIsUser(true);

  //       // redirect(HOME_SCREEN);
  //     } else {
  //       stateObj[1].error = true;
  //       stateObj[1].helperText = JOIN(INCORRECT + PASSWORD);
  //       console.log("incorrect password");
  //     }
  //   } else {
  //     stateObj[0].error = true;
  //     stateObj[0].helperText = JOIN(INCORRECT + EMAIL);
  //     console.log("Email Id doesn't exist.");
  //     // console.log(`Username in handle submit 2 = ${props.username}`);
  //   }
  //   setErrorArray(stateObj);
  // };
  return (
    <>
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
        <Box component="form" onSubmit={handleSubmit} noValidate>
          {componentArray.map((e, i) => (
            <TextField
              key={e.id}
              margin="normal"
              required
              fullWidth
              error={errorArray[i].error}
              helperText={errorArray[i].helperText}
              id={e.id}
              name={e.id}
              label={e.label}
              autoFocus={e.autoFocus}
              type={
                e.type === "password"
                  ? !isVisible
                    ? "password"
                    : "text"
                  : "text"
              }
              InputProps={{
                endAdornment: e.type === "password" && (
                  <PasswordVisibility
                    isVisible={isVisible}
                    switchVisible={switchVisible}
                  />
                ),
              }}
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
              <Button
                onClick={async () => {
                  const data = await api.post("/authenticate", {
                    email: "trrr@tt.com",
                    password: "12345",
                  });
                  console.log(data);
                }}
              >
                Forgot password?
              </Button>
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
          {/* {props.loading && <Button variant="contained">Loading</Button>} */}
          {console.log(
            `userDetails = ${JSON.stringify(props.userDetails)}\nerror = ${
              props.error
            }\ntoken = ${props.token}\nisUser = ${props.isUser}`
          )}
        </Box>
      </Box>
      <LoadingScreen open={props.loading} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUsername: (username) => dispatch(setUsername(username)),
//   };
// };

export default connect(mapStateToProps, { authenticateUser, setEmailEntered })(
  SignIn
);
// export default SignIn;
