import React from 'react'
import {InputBox} from '../CustomComponents/InputBox';
import Table from './TablePage/Table';

class TablePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isTable: false,
        inputString: ''
      };
    }
    
    
    buttonClick = () => {
        this.setState({isTable: !this.state.isTable});
    }
    
    changeState = (event) => {
      this.setState({inputString: event.target.value});
    }

    render() {
      return (
        <>
          <p>
            Home Page
          </p>
          <InputBox changeState = {this.changeState} inputString = {this.state.inputString}/>
          <button onClick={this.buttonClick}>
            Table/Para
          </button>
          <Table isTable = {this.state.isTable} rootNumber = {this.state.inputString}/>
        </>
      );
    }
  }

export default TablePage
