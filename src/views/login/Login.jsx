import React, {useCallback, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send'
import {useStore} from '../../store/useStore'

const styles = theme => ({
  root: {},
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
  paper: {}
});

const Main = ({classes}) => {
  //======================= Local state, state = {} =======================
  const [admin, setAdmin] = useState({email:null, password:null})
  //======================= connect to app store state =======================
  const { state, dispatch } = useStore();
  //======================= events to dispatch based on action in store =======================
  const login = useCallback(() => dispatch({ type: "login", payload: admin }), [dispatch]);
  //======================= combine form data =======================
  const handleChange = (e) => {
    //======================= new way to use this.setState =======================
     setAdmin({ ...admin, [e.target.name]: e.target.value});
  }
  console.info("Main Store STATE:", state)
  return (
    <Paper className={classes.control}>
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
            onClick={login}
            className={classes.margin}>
            Plug In
            <SendIcon className={classes.extendedIcon}/>
          </Fab>
        </Grid>
      </Grid>
    </Paper>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
