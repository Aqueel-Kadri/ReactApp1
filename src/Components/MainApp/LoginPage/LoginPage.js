import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { HOME_SCREEN } from "../../../Consatnts/StringConstants";
import  SignIn from "./SignIn";
import SignUp from "./SignUp/SignUp";

const LoginPage = (props) => {
  const [isSignIn, setIsSignIn] = useState(true)
  return (
    isSignIn ? 
    (
      props.isUser ? <Navigate to = {HOME_SCREEN}/> : <SignIn setIsSignIn = {setIsSignIn}/>
    ) : <SignUp setIsSignIn = {setIsSignIn}/>
  );
};

const mapStateToProps = (state) => {
  return {
    isUser: state.isUser
  }
}

export default connect(mapStateToProps)(LoginPage);