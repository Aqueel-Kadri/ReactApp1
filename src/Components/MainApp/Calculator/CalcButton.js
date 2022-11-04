import { Button } from "@mui/material";
import React from "react";

class CalcButton extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onKeyPressed(this.props.text);
  }

  render() {
    return <Button sx={this.props.sx} variant="contained" onClick={this.onClick}>{this.props.text}</Button>;
  }
}

export default CalcButton;
