import axios from "axios";
// import { Alert } from "react-native";
// import store from "../Redux/Store";
// import { removeData, getData } from "./asyncStorageUtil";
let ip = "34.220.143.28";
// let ip = "localhost";
// let ip = "192.168.29.42";
let port = "8080";
let baseURL = `http://${ip}:${port}/`;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// api.interceptors.request.use(async (request) => {
//   if (
//     !request.url.includes("/register") &&
//     !request.url.includes("/authenticate")
//   ) {
//     request.headers["Authorization"] = await getData("omServerToken");
//   }
//   return request;
// });

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Do something with response error
//     // return Promise.reject(error);
//     // if (error.status === 401) {
//     if (error.message === "Request failed with status code 401") {
//       store.dispatch({
//         type: "UPDATE_AUTH_COMPLETED",
//         authValues: { googleAuth: false, appAuth: false },
//       });
//       removeData("omServerToken");
//       return Promise.reject(error);
//     } else if (error.message === "Network Error") {
//       Alert.alert("Please connect to Internet");
//     } else {
//       console.log(JSON.stringify(error));
//       return Promise.reject(error);
//     }
//   }
// );
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Do something with response error
//     // return Promise.reject(error);
//     if (true !== error.config.ignore_interception) {
//       if (error.response.status === 401) {
//         store.dispatch({ type: "LOGOUT_SUCCESS" });
//         localStorage.removeItem(`${appConfig.appSource}_token`);
//         return Promise.reject(error);
//       } else if (error.response.data.errors.message) {
//         store.dispatch(
//           createAlert({
//             type: "error",
//             message: error.response.data.errors.message,
//           })
//         );
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
