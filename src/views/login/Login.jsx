import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send'
import { authenticate } from '../../store/helpers'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginLeft: theme.spacing.unit
  },
});

const Login = (props) => {
  const { user, setUser, classes } = props
  //======================= Local state, state = {} =======================
  const [admin, setAdmin] = useState(user)
 //======================= combine form data =======================
  const handleChange = (e) => {
    //======================= new way to use this.setState =======================
     setAdmin({ ...admin, [e.target.name]: e.target.value});
  }
  const handleSubmit = async (e) => {
  //======================= events to dispatch based on action in store =======================
    e.preventDefault();
    try {
    const { data } = await authenticate(admin)
    setUser( data );
    } catch (error) {
      console.error("ERROR FETCHING AUTH USER")
    }
  }
  console.info("Login local STATE:", props)
  return (
    <Paper className={classes.control}>
    <form onSubmit={handleSubmit} />
      <Grid container>
        <Grid item>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            onChange={handleChange}
            type="email"
            name="email"
            fullWidth
            autoComplete="email"
            margin="normal"
            variant="outlined"/>
          <TextField
            id="outlined-full-width"
            className={classes.textField}
            onChange={handleChange}
            label="Password"
            type="password"
            name="password"
            fullWidth
            margin="normal"
            variant="outlined"/>
          <Fab
            variant="extended"
            color="primary"
            aria-label="Add"
            size="large"
            onClick={handleSubmit}
            className={classes.margin}>
            Plug In
            <SendIcon className={classes.extendedIcon}/>
          </Fab>
        </Grid>
      </Grid>
    </Paper>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
