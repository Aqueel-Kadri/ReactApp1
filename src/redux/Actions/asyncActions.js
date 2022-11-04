import { REGISTER_PROTOTYPE } from "../../Consatnts/JsonConstants";
import { INVALID_PASSWORD, INVALID_USER } from "../../Consatnts/StringConstants";
import api from "../../Utils/apiUtil";
import { apiFailure, apiRequest, apiSuccess, setIsUserOff } from "./Actions";

export const authenticateUser = (formData) => {
  return async (dispatch) => {
    try {
      
      dispatch(apiRequest());
      const response = await api.post("/authenticate", formData);
      let data = response.data;

      if (data.userDetails) {
        const userDetails = {
          email: data.userDetails.email,
          password: data.userDetails.password,
          username: data.userDetails.nickName,
        };
        data = {
          ...data,
          userDetails: userDetails,
        };
      }

      if (data.userExist) {
        localStorage.setItem("userData", JSON.stringify(data));
        dispatch(apiSuccess(data));
      }
      else
      {
        dispatch(apiFailure(INVALID_USER))
      }
    } catch (error) {
      dispatch(apiFailure(INVALID_PASSWORD));
    }
  };
};

export const registerUser = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(apiRequest());
      let registerApiBody = {
        ...REGISTER_PROTOTYPE,
        email: formData.email,
        password: formData.password,
        displayName: formData.username,
        nickName: formData.username,
        firstName: formData.username,
        lastName: formData.username,
      };
      const response = await api.post("/register", registerApiBody);
      let data = response.data;
      if (data.userDetails) {
        const userDetails = {
          email: data.userDetails.email,
          password: data.userDetails.password,
          username: data.userDetails.nickName,
        };
        data = {
          ...data,
          userDetails: userDetails,
        };
      }
      dispatch(apiSuccess(data));
    } catch (error) {
      dispatch(apiFailure(INVALID_PASSWORD));
    }
  };
};

export const checkIfTokenExpired = (jwt) => {
  return (dispatch) => {
    const payload = JSON.parse(atob(jwt.split(".")[1]));
    const expirationTime = payload.exp;

    if (expirationTime * 1000 < Date.now()) {
      localStorage.removeItem("isUser");
      localStorage.removeItem("token");
      dispatch(setIsUserOff());
    }
    else
    {
      console.log('token valid');
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    localStorage.removeItem("userData");
    dispatch(setIsUserOff());
  };
};
