
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ControlBar} from '../common/components'

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
});

const Layout = ({classes, routes, history}) => {
  console.log("LAYOUT.jsx", history.location.pathname)
  const renderRoutes = () => ( routes.map((route) => <Route {...route}/>))
  return (
    <div className={classes.root}>
      <Grid container alignItems="stretch" direction="column" >
          { renderRoutes() }
        <ControlBar history={history} />
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
