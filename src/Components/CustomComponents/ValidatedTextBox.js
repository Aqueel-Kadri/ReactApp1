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

export const ValidatedTextBox = (props) => {
  const [stateObj, setStateObj] = useState({
    value: "",
    error: false,
    helperText: "",
  });


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
    if(props.errorUpdater)
    {
      props.errorUpdater(stateObj.error);
    }
  };

  const handleConfirm = (event) => {
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
    if(props.cnfErrorUpdater)
    {
      props.cnfErrorUpdater(cnfStateObj.error);
    }
  };

  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        error={stateObj.error}
        onChange={handleChange}
        value={stateObj.value}
        helperText={stateObj.helperText}
        id={props.id}
        label={props.label}
        name={props.id}
        type={props.type}
        autoFocus={props.autoFocus}
      />
      <>
        {props.confirm ? (
          <TextField
            margin="normal"
            required
            fullWidth
            error={cnfStateObj.error}
            onChange={handleConfirm}
            value={cnfStateObj.value}
            helperText={cnfStateObj.helperText}
            id={`confirm-${props.id}`}
            label={`Confirm ${props.label}`}
            name={`confirm-${props.id}`}
            type={props.type}
          />
        ) : (
          <></>
        )}
      </>
    </>
  );
};
