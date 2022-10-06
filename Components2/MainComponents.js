import React from 'react'
import InputBox from './InputBox';
import Table from './Table';

class MainComponent extends React.Component {
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
          <InputBox changeState = {this.changeState} inputString = {this.state.inputString}/>
          <button onClick={this.buttonClick}>
            Table/Para
          </button>
          <Table isTable = {this.state.isTable} rootNumber = {this.state.inputString}/>
        </>
      );
    }
  }

export default MainComponent
