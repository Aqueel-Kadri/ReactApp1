import React from 'react'

class InputBox extends React.Component {
    render() {
      return (
        <>
        <input 
            type="text" 
            value={this.props.inputString}
            onChange={this.props.changeState} 
        />
        </>
      );
    }
  }


export default InputBox