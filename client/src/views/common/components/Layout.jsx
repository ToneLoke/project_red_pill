import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ControlsBar from './ControlsBar';
import Notifications from './Notifications';

const styles = (theme) => ({
  root: {
    height: '100vh',
    overflow: 'hidden'
  },
  content: {
    flex: '1 0',
    overflow: 'auto'
  }
});

const Layout = ({ children, header, classes }) => (
  <Fragment>
    <Grid
      container
      alignItems="stretch"
      direction="column"
      wrap="nowrap"
      className={classes.root}
    >
      {header}
      <div className={classes.content}>{children}</div>
      <Route key="/control-bar" path="/" component={ControlsBar} />
    </Grid>
    <Notifications />
  </Fragment>
);

export default withStyles(styles)(Layout);
