import React, { useState, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

import { useStore } from '../../store';
import { Field } from '../common/components';
//TODO: seperate in own file or pull from db
const CATEGORIES = [
  {
    label: "general sales",
    value: 1
  },
  {
    label: "vehicle inventory",
    value: 2
  },
  {
    label: "company culture",
    value: 3
  }
];

const styles = {
  container: {
    width: '100%',
    marginBottom: '18%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textField: {
    width: '90%',
    marginBottom: '15px'
  },
  btnWrapper: {
    width: '90%',
  },
  btn: {
    marginTop: '20px',
    width: '100%',
  },
  full: {
    width: '100%',
  }
};

const Settings = ({ classes }) => {
  const { state: { game }, dispatch } = useStore();
  const handleChange = (e) => {
    console.log("handlechange in settings", e)
    dispatch({type: "GAME_CREATE_UPDATE", payload: { ...game, [e.target.name]: e.target.value } })
  }
  return (
    <Paper className={classes.container}>
      <List className={classes.full}>
        <ListItem className={classes.textField}>
          <Field
            className={classes.full}
            label="Title"
            name="title"
            bubbleUp={handleChange}
            value={game.title}
          />
        </ListItem>
        <ListItem className={classes.textField}>
          <Field
            className={classes.full}
            select
            label="Category"
            name="category"
            items={CATEGORIES}
            value={game.category}
            bubbleUp={handleChange}
          />
        </ListItem>
        <ListItem className={classes.textField}>
          <ListItemText primary="Auto Start" secondary="select a start size once enabled..." />
          <ListItemSecondaryAction>
            <Switch
              name="status"
              onChange={handleChange}
              checked={game.autoStart}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  )
}

export default withStyles(styles)(Settings);
