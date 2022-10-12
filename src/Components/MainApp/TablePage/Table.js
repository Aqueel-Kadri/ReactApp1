import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSize: 10,
    };
  }

  createTable = () => {
    let rows = [];
    let rootNumber = this.props.rootNumber;
    for (let i = 0; i < this.state.tableSize; i++) {
      rows.push(<div key={`${i}`}>{(i + 1) * rootNumber}</div>);
    }
    // if(isTable)
    // {
    //     if(isNaN(rootNumber))
    //     {
    //         rows.push(<>'{rootNumber}' is not a number</>);
    //     }
    //     else
    //     {
    //         for(let i = 0; i < this.state.tableSize; i++)
    //         {
    //             rows.push(<div key = {`${i}`}>{(i+1)*rootNumber}</div>)
    //         }
    //     }
    // }
    // else
    // {
    //     rows.push(<>{rootNumber}</>)
    // }
    return rows;
  };

  render() {
    let { isTable, rootNumber } = this.props;

    return (
      <>
        {isTable ? (
          /^[0-9]+$/.test(rootNumber) ? (
            <>{this.createTable()}</>
          ) : rootNumber !== "" ? (
            <>{`'${rootNumber}' is not an integer`}</>
          ) : (
            <>{rootNumber}</>
          )
        ) : (
          <>{rootNumber}</>
        )}
      </>
    );
  }
}
