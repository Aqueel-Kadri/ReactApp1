export const updateIsAuthCompleted = (googleAuth, appAuth) => {
  return {
    type: "UPDATE_AUTH_COMPLETED",
    authValues: { googleAuth, appAuth },
  };
};

export const registrationProgress = () => {
  return {
    type: "REGISTRATION_PROGRESS",
    started: true,
  };
};
