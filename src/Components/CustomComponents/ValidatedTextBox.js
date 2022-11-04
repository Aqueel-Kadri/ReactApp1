import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  EMAIL,
  EMAIL_VALIDATOR,
  INVALID,
  JOIN,
  MUST_CONTAIN,
  NOT_MATCH,
  NUMBERS,
  NUMBER_VALIDATOR,
  PASSWORD,
  REQUIRED,
  SPECIAL_CHAR,
  SPECIAL_CHAR_VALIDATOR,
  TOO_SHORT,
  UPPER_CASE,
  UPPER_CASE_VALIDATOR,
  USERNAME,
} from "../../Consatnts/StringConstants";
import PasswordVisibility from "./PasswordVisibility";

export const ValidatedTextBox = (props) => {
  const [stateObj, setStateObj] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const [isVisible, setIsVisible] = useState(!(props.type === "password"));
  const [cnfIsVisible, setCnfIsVisible] = useState(false);
  const [cnfDisabled, setCnfDisabled] = useState(true);
  const [isDefault, setIsDefault] = useState(true);

  

  const switchCnfVisible = () => {
    setCnfIsVisible(!cnfIsVisible);
  };

  const switchVisible = () => {
    setIsVisible(!isVisible);
  };
  const [cnfStateObj, setCnfStateObj] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handleUsername = (stateObj) => {
    if (stateObj.value.length === 0) {
      stateObj.helperText = JOIN(USERNAME + REQUIRED);
    } else {
      stateObj.error = false;
    }
    setStateObj(stateObj);
  };

  const handleEmail = (stateObj) => {
    if (stateObj.value.length === 0) {
      stateObj.helperText = JOIN(EMAIL + REQUIRED);
    } else if (!EMAIL_VALIDATOR.test(stateObj.value)) {
      stateObj.helperText = JOIN(EMAIL + INVALID);
    } else {
      stateObj.error = false;
    }
    setStateObj(stateObj);
  };

  const handlePassword = (stateObj) => {
    if (stateObj.value.length === 0) {
      stateObj.helperText = JOIN(PASSWORD + REQUIRED);
    } else if (stateObj.value.length <= 5) {
      stateObj.helperText = JOIN(PASSWORD + TOO_SHORT);
    } else {
      let helperText = "";

      if (!UPPER_CASE_VALIDATOR.test(stateObj.value)) {
        helperText += UPPER_CASE;
      }
      if (!NUMBER_VALIDATOR.test(stateObj.value)) {
        helperText += NUMBERS;
      }
      if (!SPECIAL_CHAR_VALIDATOR.test(stateObj.value)) {
        helperText += SPECIAL_CHAR;
      }
      if (helperText.length > 0) {
        helperText = PASSWORD + MUST_CONTAIN + helperText;
        stateObj.helperText = JOIN(helperText);
      } else {
        console.log(helperText);
        stateObj.error = false;
      }
    }
    setStateObj(stateObj);
  };

  const handleChange = (event) => {
    setIsDefault(false);
    console.log(`isDefault = ${isDefault}`)
    let stateObj = {
      value: "",
      error: false,
      helperText: "",
    };
    stateObj.value = event.target.value;

    if (props.validate) {
      stateObj.error = true;
      if (event.target.id === "email") {
        handleEmail(stateObj);
      } else if (event.target.id === "username") {
        handleUsername(stateObj);
      } else if (event.target.id === "password") {
        handlePassword(stateObj);
      }
    } else {
      setStateObj(stateObj);
    }
    if (props.errorUpdater) {
      props.errorUpdater(stateObj.error);
    }
    setCnfDisabled(stateObj.error);
    if(stateObj.error)
    {
      setCnfStateObj({
        ...cnfStateObj,
        value: ''
      })
    }
  };

  const handleConfirmPasswordChange = (event) => {
    let cnfStateObj = {
      value: "",
      error: true,
      helperText: "",
    };
    cnfStateObj.value = event.target.value;

    if (cnfStateObj.value !== stateObj.value) {
      cnfStateObj.helperText = JOIN(PASSWORD + NOT_MATCH);
    } else {
      cnfStateObj.error = false;
    }
    setCnfStateObj(cnfStateObj);
    if (props.cnfErrorUpdater) {
      props.cnfErrorUpdater(cnfStateObj.error);
    }
  };

  return (
    <>
    {/* {console.log(`statObj = ${JSON.stringify(stateObj)}`)} */}
      <TextField
        margin="normal"
        required
        fullWidth
        error={stateObj.value === '' ? false : stateObj.error}
        onChange={handleChange}
        value={isDefault ? props.defaultValue :stateObj.value}
        helperText={stateObj.helperText}
        id={props.id}
        label={props.label}
        name={props.id}
        type={isVisible ? "text" : "password"}
        autoFocus={props.autoFocus}
        InputProps={{
          endAdornment: props.type === "password" && (
            <PasswordVisibility
              isVisible={isVisible}
              switchVisible={switchVisible}
            />
          ),
        }}
      />
      {/* {props.type == PASSWORD.trim().toLowerCase() ? <Button onMouseDown={enableVisible} onMouseUp={disableVisible}>
        {isVisible ? <VisibilityIcon color="action"/> : <VisibilityOffIcon color="action"/>}
      </Button> : <></> */}
      {/* } */}

      <>
        {props.confirm && (
          <TextField
            margin="normal"
            required
            fullWidth
            disabled={cnfDisabled}
            error={cnfStateObj.value === '' ? false : cnfStateObj.error}
            onChange={handleConfirmPasswordChange}
            value={cnfStateObj.value}
            helperText={cnfStateObj.helperText}
            id={`confirm-${props.id}`}
            label={`Confirm ${props.label}`}
            name={`confirm-${props.id}`}
            type={cnfIsVisible ? "text" : "password"}
            InputProps={{
              endAdornment: props.type === "password" && (
                <PasswordVisibility
                  isVisible={cnfIsVisible}
                  switchVisible={switchCnfVisible}
                />
              ),
            }}
          />
        )}
      </>
    </>
  );
};
