import React from 'react'

export const InputBox = (props) => {
  return (
    <input 
      type="text" 
      value={props.inputString}
      onChange={props.changeState} 
    />
  )
}
