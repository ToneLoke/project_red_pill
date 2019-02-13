import React from 'react'
import TextField from '@material-ui/core/TextField';
//NOTE: button is disabled unless needed in the future
const email = (props) =>
  (
    <TextField
      id="outlined-email-input"
      label="Email"
      type="email"
      name="email"
      fullWidth
      autoComplete="email"
      margin="normal"
      variant="outlined"
      {...props}
    />
  )
const password = (props) =>
  (
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      name="password"
      fullWidth
      margin="normal"
      variant="outlined"
      {...props}
    />
  )

  export default { email, password }
