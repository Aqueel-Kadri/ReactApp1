import React from "react";
// import {InputBox} from '../CustomComponents/InputBox';
import Box from "@mui/material/Box";
import Table from "./Table";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { checkIfTokenExpired } from "../../../redux/Actions/asyncActions";

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTable: false,
      inputString: "",
    };
    // console.log('at Home');
  }

  buttonClick = () => {
    this.setState({ isTable: !this.state.isTable });
  };

  changeState = (event) => {
    this.setState({ inputString: event.target.value });
  };

  render() {
    this.props.checkIfTokenExpired(this.props.token);
    return (
      // <Box
      //   sx={{
      //     marginTop: 1,
      //     display: "flex",
      //     flexDirection: "column",
      //     alignItems: "center",
      //   }}
      // >
      <div className="flexi column orange">
        <div className="flexi justified column forty bluez">
          <TextField
            margin="normal"
            id="rootNumber"
            label="Input String"
            name="rootNumber"
            autoFocus
            value={this.state.inputString}
            onChange={this.changeState}
          />
          <Button type="submit" variant="contained" onClick={this.buttonClick}>
            Table / Para
          </Button>

          <Typography align="center" component="h1" variant="h5">
            <Table
              isTable={this.state.isTable}
              rootNumber={this.state.inputString}
            />
          </Typography>
        </div>
        <div className="flexi column sixty orange"></div>
      </div>
      // <div className="fifty bluez"></div>
      // </div>
      // </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, { checkIfTokenExpired })(TablePage);
