import React, { useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import { useStore } from '../../store';
import controls from '../common/controls';
import { Field, AdminBar } from '../common/components';


const styles = theme => ({
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
  },
  btnWrapper: {
    width: '90%',
  },
  btn: {
    width: '100%',
  }
});

const Setup = ({classes, history}) => {
  //======================= Connect to store using hooks =======================
  const { state: { game }, dispatch } = useStore();

  const handleChange = () => {};
  const path = history.location.pathname

  const renderActions = (a) => {
    return (
      <div key={a.key} className={classes.btnWrapper}>
        <Fab {...a.styles} onClick={()=> dispatch({type: 'GAME_NEW'})} className={classes.btn}>
        {!!a.text && a.text}
        { a.icon && <a.icon /> }
        </Fab>
      </div>
    )
    }
  return (
    <Fragment>
    <AdminBar title="Title of Session" icon="prev" action="goBack" />
    <Paper className={classes.container}>
      <Field
        className={classes.textField}
        name="text"
        value="Vehicle Anatomy"
        label="Title"
        bubbleUp={handleChange}
      />
      <Field
        name="password"
        value="123456"
        label="Pin"
        className={classes.textField}
        bubbleUp={handleChange}
      />
      <Divider  className={classes.btn}/>
      <List className={classes.btn}>
      <ListItem className={classes.textField}>
        <ListItemText primary="Publish" secondary="make the session live..." />
        <ListItemSecondaryAction>
          <Switch
          onChange={()=>{}}
            checked={true}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider  className={classes.btn}/>
      <ListItem className={classes.textField}>
        <ListItemText primary="Auto Start" secondary="select a start size once enabled..." />
        <ListItemSecondaryAction>
          <Switch
            onChange={()=>{}}
            checked={true}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
      {controls.actions[path] && controls.actions[path].map(renderActions)}
    </Paper>
    </Fragment>
  );
}

Setup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Setup);
