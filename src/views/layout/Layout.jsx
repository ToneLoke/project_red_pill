
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ControlBar} from '../common/components'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
});

const Layout = (props) => {
  const { classes, routes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16} alignItems="stretch" direction="column" >
        <Grid item xs={12}>
          { routes.map((route, i) => <Route key={route.key} path={route.path} routes={route.routes}/>) }
        </Grid>
        <ControlBar {...props} />
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
