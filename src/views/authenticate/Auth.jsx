import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStore } from "../../store";
import { Field } from "../common/components";
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
        value={user.email || ""}
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
        value={user.password || ""}
        bubbleUp={handleChange}
      />
    </Paper>
  );
  //TODO add password confirmation for register
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Auth);
