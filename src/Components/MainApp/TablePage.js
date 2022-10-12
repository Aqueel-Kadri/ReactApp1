import React from "react";
// import {InputBox} from '../CustomComponents/InputBox';
import Box from "@mui/material/Box";
import Table from "./TablePage/Table";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTable: false,
      inputString: "",
    };
  }

  buttonClick = () => {
    this.setState({ isTable: !this.state.isTable });
  };

  changeState = (event) => {
    this.setState({ inputString: event.target.value });
  };

  render() {
    return (
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Home Page
        </Typography>
        <TextField
          margin="normal"
          id="rootNumber"
          label="Input String"
          name="rootNumber"
          autoFocus
          value={this.state.inputString}
          onChange={this.changeState}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={this.buttonClick}
        >
          Table / Para
        </Button>

        <Typography component="h1" variant="h5">
          <Table
            isTable={this.state.isTable}
            rootNumber={this.state.inputString}
          />
        </Typography>
      </Box>
    );
  }
}

export default TablePage;
