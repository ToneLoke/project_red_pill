import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { useStore } from '../../store';
import { Field, AdminBar } from '../common/components';
import controls from '../common/controls';


const styles = theme => ({
  header: {
    height: '50px',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  textField: {
    width: '90%',
  },
  form: {
    width: '100%',
    marginBottom: '18%',
    height: '50%',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  btnWrapper: {
    width: '90%',
  },
  btn: {
    width: '100%',
  }
});

const Login = ({ classes, history }) => {
  //======================= Connect to store using hooks =======================
  const { state: { user, loggedIn }, dispatch } = useStore();
  console.count("LOGIN.jsx:")
  console.log(history.location);

  if (loggedIn) {
    history.push('/games')
  }
  const path = history.location.pathname + history.location.search
  //======================= combine form data =======================
  const handleChange = (e) => {
    //======================= events to dispatch based on action in store =======================
    dispatch({ type: 'USER_SET', payload: { ...user, [e.target.name]: e.target.value } });
  }
  const renderActions = (a) => {
    return (
      <div key={a.key} className={classes.btnWrapper}>
        <Fab {...a.styles} onClick={() => dispatch({ type: a.action, payload: user })} className={classes.btn}>
          {!!a.text && a.text}
          { a.icon && <a.icon /> }
        </Fab>
      </div>
    )
  }
  return (
      <Paper className={classes.form}>
        <Field
          value={user.email}
          className={classes.textField}
          name="email"
          bubbleUp={handleChange}
        />
        <Field
          name="password"
          className={classes.textField}
          value={user.password}
          bubbleUp={handleChange}
        />
        {history.location.search.indexOf('register') > -1 &&
          (<Field
            name="password"
            className={classes.textField}
          />)
        }
        {controls.actions[path] && controls.actions[path].map(renderActions)}
      </Paper>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
