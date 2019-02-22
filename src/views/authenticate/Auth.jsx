import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStore } from "../../store";
import { Field, ActionBar } from "../common/components";
import controls from "../common/controls";
import styles from './Auth.styles';



const Auth = ({ classes, history }) => {
  //======================= Connect to store using hooks =======================
  const {
    state: { user, loggedIn },
    dispatch
  } = useStore();

  console.count("LOGIN.jsx:");

  if (loggedIn) {
    history.push("/games");
    dispatch({ type: "GAME_FETCH_ALL" });
  }
  const path = history.location.pathname + history.location.search;
  //======================= combine form data =======================
  const handleChange = e => {
    //======================= events to dispatch based on action in store =======================
    dispatch({
      type: "USER_SET",
      payload: { ...user, [e.target.name]: e.target.value }
    });
  };

  const handleDispatch = type => dispatch( { type, payload: })

  return (
    <Paper className={classes.form}>
      <div className="hero-section" />
      <Field
        value={user.email}
        className={classes.textField}
        name="email"
        label="Email"
        type="email"
        bubbleUp={handleChange}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        className={classes.textField}
        value={user.password}
        bubbleUp={handleChange}
      />
      {history.location.search.indexOf("register") > -1 && (
        <Field name="password" className={classes.textField} />
      )}
      <ActionBar actions={controls[path] || null} dbHandler={handleDispatch}/>
    </Paper>
  );
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Auth);
