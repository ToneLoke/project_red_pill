import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { useStore } from '../../store';
import { Field } from '../common/components';
import controls from '../common/controls';


const styles = theme => ({
  header: {
    height: '50px',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 0 5px 5px',
    color: 'white'
  },
  textField: {
    width: '90%',
  },
  form: {
    width: '95%',
    marginBottom: '18%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  btn: {
    position: "relative",
    bottom: "-20px",
  }
});

const Login = ({ classes, history }) => {
  //======================= Connect to store using hooks =======================
  const { state: {user}, dispatch } = useStore();
  console.count("LOGIN.jsx:")
  const path = history.location.pathname + history.location.search
  //======================= combine form data =======================
  const handleChange = (e) => {
    //======================= events to dispatch based on action in store =======================
    dispatch({ type: 'USER_SET', payload: { ...user, [e.target.name]: e.target.value } });
  }
  const renderActions = (a) => {
    return (
      <div key={a.key} className={classes.btn}>
        <Fab {...a.styles} onClick={()=> dispatch({type: a.action })}>
          <a.icon />
          {a.text}
        </Fab>
      </div>
    )
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
      {controls.actions[path] && controls.actions[path].map(renderActions)}
    </Paper>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
