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
    return (
      <div className="full flexi">
        <div className="two"></div>
        <Button
          sx={this.props.sx}
          style={
            {
              flex: "96"
            }
          }
          variant="contained"
          onClick={this.onClick}
        >
          {this.props.text}
        </Button>
        <div className="two"></div>
      </div>
    );
  }
}

export default CalcButton;
