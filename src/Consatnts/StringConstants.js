//Route Cohnstants Start
export const LOGIN_SCREEN = "/login";
export const HOME_SCREEN = "/";
export const CALCULATOR = "/calculator";
//Route Cohnstants End

//Error helper texts Start
export const REQUIRED = " is a required field ";
export const MUST_CONTAIN = " must contain ";
export const EMAIL = " Email ID ";
export const INVALID = " Invalid ";
export const PASSWORD = " Password ";
export const USERNAME = " Username ";
export const SPECIAL_CHAR = " Special Characters ";
export const UPPER_CASE = " Upper Case Character ";
export const NUMBERS = " Numbers (0-9) ";
export const TOO_SHORT = " is too short ";
export const NOT_MATCH = " did not match ";
export const INCORRECT = " incorrect ";

export const JOIN = (finalString) => {
  return finalString.replace(/\s\s/, " ").trim();
};
//Error helper texts End

//Regex Constants Start
export const PASSWORD_VALIDATOR = new RegExp(
  "^(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.*[0-9]).{5,}$"
);
export const UPPER_CASE_VALIDATOR = new RegExp("[A-Z]");
export const NUMBER_VALIDATOR = new RegExp("[0-9]");
export const SPECIAL_CHAR_VALIDATOR = new RegExp("[^A-Za-z0-9]");
export const EMAIL_VALIDATOR = new RegExp(
  "[a-zA-Z_\\-]+@[a-zA-Z]+\\.[a-zA-Z]{2,}"
);
//Regex Constants End

//Redux Constants Start
export const SET_ISUSER_ON = "SET_ISUSER_ON";
export const SET_ISUSER_OFF = "SET_ISUSER_OFF";
export const API_SUCCESS = "API_SUCCESS";
export const API_FAILURE = "API_FAILURE";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const API_REQUEST = "API_REQUEST";
export const NOT_USER = "NOT_USER";
export const SET_EMAIL_ENTERED = "SET_EMAIL_ENTERED";
//Redux Constants End

//Error Constants
export const INVALID_USER = "INVALID EMAIL";
export const INVALID_PASSWORD = "INVALID PASSWORD";


// {"username":"asda","email":"qwe@qwe.comaa","password":"qweA@2a"}

// qweA@2a