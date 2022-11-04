import {
  API_SUCCESS,
  EMAIL,
  INVALID,
  INVALID_PASSWORD,
  INVALID_USER,
  JOIN,
  NOT_USER,
  SET_EMAIL_ENTERED,
  SET_ISUSER_OFF,
  SET_ISUSER_ON,
  STOP_LOADING,
} from "../../Consatnts/StringConstants";
import { API_FAILURE } from "../../Consatnts/StringConstants";
import { API_REQUEST } from "../../Consatnts/StringConstants";

let userData = localStorage.getItem("userData");
let isEmpty = false;

if (!userData) {
  isEmpty = true;
} else {
  userData = JSON.parse(userData);
}

const initialState = isEmpty
  ? {
      userDetails: {},
      loading: false,
      error: "",
      token: "",
      isUser: "",
      emailEntered: "",
    }
  : {
      userDetails: userData.userDetails,
      loading: false,
      error: "",
      token: userData.token,
      isUser: userData.userExist,
      emailEntered: "",
    };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case API_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload.userDetails,
        token: action.payload.token,
        isUser: action.payload.userExist,
        error: "",
      };
    case API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        userDetails: "",
        isUser: false,
        token: "",
      };
    case SET_ISUSER_ON:
      return {
        ...state,
        isUser: true,
      };
    case SET_ISUSER_OFF:
      return {
        ...state,
        isUser: false,
      };
    case SET_EMAIL_ENTERED:
      return {
        ...state,
        emailEntered: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
