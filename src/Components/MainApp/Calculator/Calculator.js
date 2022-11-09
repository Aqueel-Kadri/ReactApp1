import React from "react";
import DisplayWindow from "./DisplayWindow";
import CalcButton from "./CalcButton";
import "../../../Flex.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import { checkIfTokenExpired } from "../../../redux/Actions/asyncActions";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      expression: "",
    };

    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
    this.onDeletePressed = this.onDeletePressed.bind(this);
  }

  onKeyPressed(text) {
    this.setState((prev) => ({
      expression: prev.expression + text,
    }));
  }

  onEvaluatePressed() {
    const result = eval(this.state.expression);
    result && this.setState({ expression: result.toString() });
  }

  onDeletePressed() {
    this.setState((prev) => ({
      expression:
        prev.expression.length <= 1 ? "" : prev.expression.slice(0, -1),
    }));
  }

  render() {
    this.props.checkIfTokenExpired(this.props.token);
    let buttonSize = {
      margin: 0.5,
      width: 0.3,
    };
    let numberKeys = [];
    for (let i = 1; i < 10; i++) {
      numberKeys.push(
        <CalcButton
          // sx={buttonSize}
          key={i}
          text={i}
          onKeyPressed={this.onKeyPressed}
        />
      );
    }

    return (
      // <Box
      //   sx={{
      //     marginTop: 2,
      //     display: "flex",
      //     flexFlow: "column wrap",
      //     alignItems: "space-between",
      //   }}
      // >
      <div className="full flexi column">
        <div className="ten black"></div>
        <div className="flexi column justified eighty bluez">
          <div className="twenty orange">
            <DisplayWindow expression={this.state.expression} />
          </div>
          {/* <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexFlow: "row wrap",
              alignContent: "space-around",
            }}
          > */}
          <div className="flexi column seventy orange">
            <div className="justified flexi bluez fiteen">
              {numberKeys.slice(0, 3)}
            </div>
            <div className="black two"></div>
            <div className="justified flexi bluez fiteen">
              {numberKeys.slice(3, 6)}
            </div>
            <div className="black two"></div>
            <div className="justified flexi bluez fiteen">
              {numberKeys.slice(6, 9)}
            </div>
            <div className="black two"></div>
            <div className="justified flexi bluez fiteen">
              <CalcButton
                // sx={buttonSize}
                text="*"
                onKeyPressed={this.onKeyPressed}
              />
              <CalcButton
                // sx={buttonSize}
                text="0"
                onKeyPressed={this.onKeyPressed}
              />
              <CalcButton
                // sx={buttonSize}
                text="+"
                onKeyPressed={this.onKeyPressed}
              />
            </div>
            <div className="black two"></div>
            <div className="justified flexi bluez fiteen">
              <CalcButton
                // sx={buttonSize}
                text="-"
                onKeyPressed={this.onKeyPressed}
              />
              <CalcButton
                // sx={buttonSize}
                text="/"
                onKeyPressed={this.onKeyPressed}
              />

              <CalcButton
                // sx={buttonSize}
                text="C"
                onKeyPressed={this.onDeletePressed}
              />
            </div>
            <div className="black two"></div>
            <div className="justified flexi bluez fiteen">
              <Button
                variant="contained"
                className="full"
                // sx={{
                //   margin: 0.5,
                //   width: 0.95,
                // }}
                onClick={this.onEvaluatePressed}
              >
                =
              </Button>
            </div>
            {/* {numberKeys}
            <CalcButton
              // sx={buttonSize}
              text="*"
              onKeyPressed={this.onKeyPressed}
            />
            <CalcButton
              // sx={buttonSize}
              text="0"
              onKeyPressed={this.onKeyPressed}
            />
            <CalcButton
              // sx={buttonSize}
              text="+"
              onKeyPressed={this.onKeyPressed}
            />
            <CalcButton
              // sx={buttonSize}
              text="-"
              onKeyPressed={this.onKeyPressed}
            />
            <CalcButton
              // sx={buttonSize}
              text="/"
              onKeyPressed={this.onKeyPressed}
            />

            <CalcButton
              // sx={buttonSize}
              text="C"
              onKeyPressed={this.onDeletePressed}
            />
            <Button
              variant="contained"
              // sx={{
              //   margin: 0.5,
              //   width: 0.95,
              // }}
              onClick={this.onEvaluatePressed}
            >
              =
            </Button> */}
          </div>
          {/* </Box> */}
        </div>
        <div className="ten black"></div>
      </div>
      // </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, { checkIfTokenExpired })(Calculator);
