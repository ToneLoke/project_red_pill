
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

const Layout = ({classes, routes, match, history}) => {
  console.log("LAYOUT.jsx", match, history)
  const renderRoutes = () => ( routes.map((route) => <Route {...route}/>))
  return (
    <div className={classes.root}>
      <Grid container spacing={16} alignItems="stretch" direction="column" >
        <Grid item xs={12}>
          { renderRoutes() }
        </Grid>
        <ControlBar match={match} history={history} />
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
