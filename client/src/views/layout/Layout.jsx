import React, { Fragment, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ControlsBar, Notification } from '../common/components';
import ROUTES from '../common/routes';
import { useStore } from '../../store';

const styles = (theme) => ({
  //NOTE: LAYOUT STYLES
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    overflow: 'hidden'
  }
});

const Layout = ({ classes }) => {
  const isLoggedIn = sessionStorage.getItem('token');
  //TODO RENDER AUTHENTICATE ON ROUTES FOR ADMIN AND USER
  const {
    state: { user },
    dispatch
  } = useStore();

  useEffect(() => {
    if (!user) {
      dispatch({ type: 'USER_INFO' }, true);
    }
  }, [user]);

  return (
    <Fragment>
      <Grid container alignItems="stretch" direction="column" className={classes.root}>
      {ROUTES.map(({ component: Component, ...rest }, i) =>
        i !== 0 ? ( //NOTE: apply authorization to all routes
          <Route
          {...rest}
            render={(props) =>
              isLoggedIn ? <Component {...props} /> : <Redirect to="/authenticate?type=login" />
            }
          />
        ) : (
          <Route
            {...rest}
            render={(props) =>
              !isLoggedIn ? <Component {...props} /> : <Redirect to="/games?type=draft" />
            }
          />
        )
      )}

      <Notification />
    </Grid>
     { user && !user.username === 'lobby' && <Route key="/control-bar" path="/" component={ControlsBar} /> }
    </Fragment>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
