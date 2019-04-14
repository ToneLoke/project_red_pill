import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStore } from "../../store";
import { Field } from "../common/components";
import styles from './Auth.styles';

const Auth = ({ classes }) => {
  //======================= Connect to store using hooks =======================
  const {
    state: { user },
    dispatch
  } = useStore();

  useEffect(()=>{
    if(!user) dispatch({ type: 'USER_SET', payload: { username: '', password: ''}})
  }, [])

  //======================= combine form data =======================
  const handleChange = e => {
    //======================= events to dispatch based on action in store =======================
    dispatch({
      type: "USER_SET",
      payload: { ...user, [e.target.name]: e.target.value }
    });
  };

  return (
    <Paper className={classes.form}>
      <div className="hero-section" />
      <Field
        value={user ? user.username : ''}
        className={classes.textField}
        name="username"
        label="Username"
        type="username"
        bubbleUp={handleChange}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        className={classes.textField}
        value={user ? user.password : ''}
        bubbleUp={handleChange}
      />
    </Paper>
  );
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Auth);
