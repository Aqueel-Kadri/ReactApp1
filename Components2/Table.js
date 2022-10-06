import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            tableSize: 10,
        }
    }

    createTable = () => {
        let rows = [];
        let rootNumber = this.props.rootNumber;
        let isTable = this.props.isTable;
        if(isTable)
        {
            if(isNaN(rootNumber))
            {
                rows.push(<>'{rootNumber}' is not a number</>);
            }
            else
            {
                for(let i = 0; i < this.state.tableSize; i++)
                {
                    rows.push(<div>{(i+1)*rootNumber}</div>) 
                }
            }
        }
        else
        {
            console.log(isTable);
            console.log(rootNumber);
            rows.push(<>{rootNumber}</>)
        }
        return rows;
    }
    


    render() {
        return (
        <>{this.createTable().map(row => <>{row}</>)}</>
        )
    }
}
