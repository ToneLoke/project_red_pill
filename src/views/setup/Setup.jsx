import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useStore } from '../../store';
import { Field } from '../common/components';


const styles = theme => ({
  textField: {
    width: '90%',
  },
  form: {
    margin: '0 auto',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const Setup = ({classes, history}) => {
  //======================= Connect to store using hooks =======================
  const { state: { game }, dispatch } = useStore();

  const handleChange = () => {};
  return (
    <Paper className={classes.form}>
    <Field
      value={game["title"]}
      className={classes.textField}
      name="title"
      bubbleUp={handleChange}
    />
    </Paper>
  );
}

Setup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Setup);
