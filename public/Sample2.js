const initialState = {
  isGoogleAuthCompleted: false,
  isAppAuthCompleted: false,
  userValuesForSignUp: {},
  registrationStarted: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTRATION_PROGRESS":
      return {
        ...state,
        registrationStarted: action.started,
      };
    case "UPDATE_AUTH_COMPLETED":
      return {
        ...state,
        isGoogleAuthCompleted: action.authValues.googleAuth,
        isAppAuthCompleted: action.authValues.appAuth,
        registrationStarted: false,
      };
    case "UPDATE_USER_VALUES_FOR_SIGN_UP":
      console.log("reducer", action.payload, state);
      return {
        ...state,
        userValuesForSignUp: {
          ...state.userValuesForSignUp,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
