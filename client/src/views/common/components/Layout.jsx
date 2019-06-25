import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Notifications from './Notifications';

const styles = (theme) => ({
  root: {
    height: '100vh',
    overflow: 'hidden'
  },
  content: {
    flex: '1 0',
    overflow: 'auto',
  }
});

const Layout = ({ children, header, footer, classes }) => (
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
      {footer}
    </Grid>
    <Notifications />
  </Fragment>
);

export default withStyles(styles)(Layout);
