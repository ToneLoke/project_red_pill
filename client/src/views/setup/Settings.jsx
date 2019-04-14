import React, {useState, Fragment} from "react";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";

import {useStore} from "../../store";
import {Field} from "../common/components";
//TODO: seperate in own file or pull from db
const CATEGORIES = [
  {
    label: "general sales",
    value: 1
  }, {
    label: "vehicle inventory",
    value: 2
  }, {
    label: "company culture",
    value: 3
  }
];

const styles = {
  container: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 30
  },
  textField: {
    width: "calc(100% - 28px)",
    margin: "auto",
    marginBottom: "15px"
  },
  btnWrapper: {
    width: "90%"
  },
  btn: {
    marginTop: "20px",
    width: "100%"
  },
  full: {
    width: "100%"
  }
};

const Settings = ({classes}) => {
  const {state: {
      game
    }, dispatch} = useStore();
  const handleChange = e => {
    //TODO: Refactor this...
    if (!game) {
      dispatch({
        type: 'GAME_CREATE_UPDATE',
        payload: {
          [e.target.name]: e.target.value
        }
      }, true)
    } else if (game[e.target.name] !== e.target.value) {
      dispatch({
        type: "GAME_CREATE_UPDATE",
        payload: {
          ...game,
          [e.target.name]: e.target.value
        }
      }, true);
    }
  };
  return (
    <Paper className={classes.container}>
      <List className={classes.full}>
        <ListItem className={classes.textField}>
          <Field
            className={classes.full}
            label="Title"
            name="title"
            bubbleUp={handleChange}
            value={game
            ? game.title
            : ''}/>
        </ListItem>
        <ListItem className={classes.textField}>
          <Field
            className={classes.full}
            label="Total Points"
            name="totalPoints"
            disabled={true}
            bubbleUp={()=>{}}
            value={game ? game.totalPoints : 0}/>
        </ListItem>
        <ListItem className={classes.textField}>
          <ListItemText
            primary="Invite Only"
            secondary="enable only for private sessions..."/>
          <ListItemSecondaryAction>
            <Switch
              disabled={true}
              name="private"
              onChange={handleChange}
              checked={game
              ? game.private
              : false}/>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  );
};

export default withStyles(styles)(Settings);
