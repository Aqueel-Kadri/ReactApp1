import { TextField } from "@mui/material";
import React from "react";

const DisplayWindow = props => (
  <TextField value={props.expression} disabled fullWidth/>
);

export default DisplayWindow;
