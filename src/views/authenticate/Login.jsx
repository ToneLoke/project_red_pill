import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useStore } from '../../store';
import { Field } from '../common/components';


const styles = theme => ({
  textField: {
    width: '90%',
  },
  form: {
    margin: '0 auto',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const Login = ({ classes, history }) => {
  //======================= Connect to store using hooks =======================
  const { state: { user, loggedIn }, dispatch } = useStore();
  console.log("LOGIN.jsx:", user, loggedIn)
  useEffect(()=>{
    console.log("USE EFFECT")
    if(loggedIn){
      history.push('/games')
    }

  }, [loggedIn])
  //======================= combine form data =======================
  const handleChange = (e) => {
    //======================= events to dispatch based on action in store =======================
    dispatch({ type: 'USER_SET', payload: { ...user, [e.target.name]: e.target.value } });
  }
  return (
    <Paper className={classes.form}>
      <Field
        value={user["email"]}
        className={classes.textField}
        name="email"
        bubbleUp={handleChange}
      />
      <Field
        name="password"
        className={classes.textField}
        value={user["password"]}
        bubbleUp={handleChange}
      />
    </Paper>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
