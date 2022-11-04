import api from "../../Utils/apiUtil";
import { getData, storeData } from "../../Utils/asyncStorageUtil";
import { createAppDataFolderInDrive, initDrive } from "../../Utils/driveUtil";
import { appDataFolderInDriveRetryService } from "../../Utils/utils";
import {
  registrationProgress,
  updateIsAuthCompleted,
} from "../Actions/authAction";
import { setGlobleLoadingIndicator } from "../Actions/loadingIndicatorAction";
export const getUserInfo = () => {
  return async (dispatch) => {
    let uInfo = await getData("userInfo");
    uInfo = JSON.parse(uInfo);
    dispatch(setGlobleLoadingIndicator(true));
    try {
      response = await api.post("/authenticate", {
        email: uInfo.email,
        password: "12345",
      });
      if (response.data.userExist) {
        storeData("omServerToken", `Bearer ${response.data.token}`);
        storeData("omServerUserID", `${response.data.userDetails.id}`);
        storeData(
          "omServerUserInfo",
          `${JSON.stringify(response.data.userDetails)}`
        );
        storeData(
          "appDataFolderIDs",
          JSON.stringify({
            omFolderID: response.data.userDetails.appDataFolderId1,
            doNotOpenFolderID: response.data.userDetails.appDataFolderId2,
            sensitiveDataFolderID: response.data.userDetails.appDataFolderId3,
          })
        );
        appDataFolderInDriveRetryService();
      } else {
        console.log("user not exist");
      }
      dispatch(updateIsAuthCompleted(true, response.data.userExist));
    } catch (error) {
      console.log("failed om api", error);
    }
    dispatch(setGlobleLoadingIndicator(false));
  };
};
export const setUserInfo = (userInputValues) => {
  return async (dispatch) => {
    //run an api or something
    dispatch(registrationProgress());
    const signUpStartTime = new Date();
    const minProcessingScreenTime = 11000;
    let uInfo = await getData("userInfo");
    uInfo = JSON.parse(uInfo);

    try {
      let registerApiBody = {
        externalUserId: 13,
        email: uInfo.email,
        password: "12345",
        displayName: uInfo.displayName,
        nickName: userInputValues.nickName ? userInputValues.nickName : "",
        firstName: uInfo.firstName,
        lastName: uInfo.lastName,
        dob: 123456789012,
        age: 12,
        sex: 2,
        phone: "8329335604",
        // phone: "8302739844",
        // phone: "8854039818",
        // phone: "8005757607",
        profilePhotoURL:
          "https://i.pinimg.com/originals/3f/d3/2d/3fd32d09a4cfca7564e3c9478e1ded81.jpg",
        roles: ["HOST"],
      };
      response = await api.post("/register", registerApiBody);
      if (response.data.userExist) {
        storeData("omServerToken", `Bearer ${response.data.token}`);
        storeData("omServerUserID", `${response.data.userDetails.id}`);
        storeData(
          "omServerUserInfo",
          `${JSON.stringify(response.data.userDetails)}`
        );
      } else {
        console.log("user not exist");
      }
      const signUpEndTime = new Date();
      let finalTime = 0;
      const processingTimeTaken =
        signUpEndTime.getTime() - signUpStartTime.getTime();
      if (processingTimeTaken < minProcessingScreenTime) {
        finalTime = minProcessingScreenTime - processingTimeTaken;
      }
      setTimeout(() => {
        dispatch(updateIsAuthCompleted(true, true));
      }, finalTime);

      //Registration completed now creating 3 nested drive folders.....

      try {
        initDrive();
        let appDataFolderId1 = null;
        let appDataFolderId2 = null;
        let appDataFolderId3 = null;
        const { folderID1, folderID2, folderID3 } =
          await createAppDataFolderInDrive();
        appDataFolderId1 = folderID1;
        appDataFolderId2 = folderID2;
        appDataFolderId3 = folderID3;

        const { id, nickName, dob, sex, profilePhotoURL } =
          response.data.userDetails;
        let updateApiResponse = await api.post("/updateUserInfo", {
          id,
          nickName,
          dob,
          sex,
          profilePhotoURL,
          appDataFolderId1,
          appDataFolderId2,
          appDataFolderId3,
        });
        storeData(
          "omServerUserInfo",
          `${JSON.stringify(updateApiResponse.data)}`
        );
      } catch (error) {
        console.log(
          "I was unable to creartw folders to soory for that, in registration",
          error
        );
      }
    } catch (error) {
      console.log("failed om api", error);
    }
  };
};
