import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useStore } from '../../store';
import { authenticate } from '../../store/helpers';
import { Field } from '../common/components';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  control: {
    margin: '0 auto',
    width: '80%'
  }
});

const Login = ({classes, history}) => {
  console.log("LOGIN RENDER:")
  //======================= Connect to store using hooks =======================
  const { state: { user }, dispatch } = useStore();
  //======================= Local state, state = {} =======================
  const [admin, setAdmin] = useState(user)
  //======================= combine form data =======================
  const handleChange = (e) => {
    //======================= new way to use this.setState =======================
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authenticate(admin)
      //======================= events to dispatch based on action in store =======================
      dispatch({ type: 'setUser', payload: data });
      history.push('/admin')
    } catch (error) {
      dispatch({type: 'throwError', payload: { code: 'A001', message: 'Invalid credentials, you may need to register...', messages: error}})
    }
  }
  console.count("Login.jsx")
  return (
    <Paper className={classes.control}>
      <form onSubmit={handleSubmit} />
          <Field
            value={admin["email"]}
            className={classes.textField}
            name="email"
            bubbleUp={handleChange}
          />
          <Field
            className={classes.textField}
            name="password"
            value={admin["password"]}
            bubbleUp={handleChange}
          />
    </Paper>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
