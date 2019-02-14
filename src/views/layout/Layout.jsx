
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { NavBar } from '../common/components';
import ROUTES from '../common/routes';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
});

const Layout = ({classes}) => {
  const renderRoutes = () => ( ROUTES.map( (route) => <Route {...route}/> ) )
  return (
      <Grid container alignItems="stretch" direction="column" className={classes.root} >
        { renderRoutes() }
        <Route key="/control-bar" path="/" component={NavBar} />
      </Grid>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
