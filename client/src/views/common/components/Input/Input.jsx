import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

  export default (props) => (
    <TextField
      id={`outlined-${props.name}`}
      variant="outlined"
      {...props}
    >
    { (Object.keys(props).indexOf('select') > -1) && props.items.map( ({value, label},i) => (<MenuItem key={value} value={value}>{label}</MenuItem>) ) }
    </TextField>
  )
