import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import SendIcon from "@material-ui/icons/Send";
import CheckCircle from "@material-ui/icons/Check";
import { useStore } from "../../store";
import {
  Layout,
  Field,
  NavBar,
  Actions,
  ActionBtn
} from "../common/components";
import { getParameterByName, isEmpty } from "../common/helpers";
import styles from "./Auth.styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  styles
);
const ActionsBar = ({ isLogin, dispatch, user }) => {
  const missingData = isEmpty(user);
  const handleClick = () =>
    isLogin && !missingData
      ? dispatch({ type: "USER_AUTHENTICATE", payload: user }, true)
      : dispatch({ type: "USER_REGISTER", payload: user }, true);

  return (
    <Actions>
      {isLogin ? (
        <ActionBtn
          disabled={missingData}
          text="LOG IN"
          icon={<SendIcon />}
          onClick={handleClick}
        />
      ) : (
          <ActionBtn
            disabled={missingData}
            text="SIGN UP"
            icon={<CheckCircle />}
            onClick={handleClick}
          />
        )}
    </Actions>
  );
};
const Auth = ({ history }) => {
  //======================= Connect to store using hooks =======================
  const {
    state: { user },
    dispatch
  } = useStore();
  const fullPath = history.location.pathname + history.location.search;
  const path = history.location.pathname;
  const isLogin = getParameterByName("type") === "login";

  const classes = useStyles();
  useEffect(() => {
    if (!user)
      dispatch({ type: "USER_SET", payload: { username: "", password: "" } });
  }, []);

  //======================= combine form data =======================
  const handleChange = e => {
    //======================= events to dispatch based on action in store =======================
    dispatch({
      type: "USER_SET",
      payload: { ...user, [e.target.name]: e.target.value }
    });
  };

  return (
    <Layout
      header={<NavBar title={isLogin ? "LOG IN" : "REGISTER"} path={path} fullPath={fullPath} showBack={false} />}
      footer={<ActionsBar isLogin={isLogin} dispatch={dispatch} user={user} />}
    >
      <Paper className={classes.root}>
        <Field
          value={user ? user.username : ""}
          className={classes.textField.root}
          name="username"
          label="Username"
          type="username"
          bubbleUp={handleChange}
        />
        <Field
          name="password"
          label="Password"
          type="password"
          className={classes.textField.root}
          value={user ? user.password : ""}
          bubbleUp={handleChange}
        />
      </Paper>
    </Layout>
  );
};


export default Auth;
