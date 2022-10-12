import React from 'react'
import Typography from "@mui/material/Typography";


export const Complete = (props) => {
  console.log(`username = ${props.username}`);
  return (
    <Typography>
        Thank you, {props.username}.
        Your account has been created.
    </Typography>
  )
}
