import React, { useState } from "react";
import { SignIn } from "./LoginPage/SignIn";
import { SignUp } from "./LoginPage/SignUp";

export const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  return (
    isSignIn ? 
    <SignIn setIsSignIn = {setIsSignIn}/> : <SignUp setIsSignIn = {setIsSignIn}/>
  );
};
