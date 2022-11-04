import { API_SUCCESS, NOT_USER, SET_EMAIL_ENTERED, SET_ISUSER_OFF, SET_ISUSER_ON } from "../../Consatnts/StringConstants";
import { API_FAILURE } from "../../Consatnts/StringConstants";
import { API_REQUEST } from "../../Consatnts/StringConstants";

export const apiSuccess = (data) => {
  return {
    type: API_SUCCESS,
    payload: data,
  };
};

export const apiFailure = (data) => {
  return {
    type: API_FAILURE,
    payload: data,
  };
};

export const apiRequest = () => {
  return {
    type: API_REQUEST,
  };
};


export const setIsUserOn  = () => {
  return {
    type: SET_ISUSER_ON
  };
}


export const setIsUserOff  = () => {
  return {
    type: SET_ISUSER_OFF
  };
}
export const setEmailEntered  = (data) => {
  return {
    type: SET_EMAIL_ENTERED,
    payload: data
  };
}


// Store.dispatch(setUsername())
