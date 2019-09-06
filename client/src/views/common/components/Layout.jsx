import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Notifications from './Notifications';

const useStyles = makeStyles({
  grid: {
    height: '100vh',
    overflow: 'hidden'
  }
});

const Layout = ({ children, header, footer }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        alignItems="stretch"
        direction="column"
        wrap="nowrap"
        className={classes.grid}
      >
        {header}
        <Grid item xs={12}>
          {children}
        </Grid>
        {footer}
      </Grid>
      <Notifications />
    </Fragment>
  );
}

export default Layout;
