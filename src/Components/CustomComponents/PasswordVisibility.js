import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

const PasswordVisibility = (props) => {
  return (
    <InputAdornment position="end">
      <IconButton
        onClick={props.switchVisible ? props.switchVisible : null}
        onMouseDown={props.enableVisible ? props.enableVisible : null}
        onMouseUp={props.disableVisible ? props.disableVisible : null}
        edge="end"
      >
        {props.isVisible ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordVisibility;
