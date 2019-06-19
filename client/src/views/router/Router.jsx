import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ROUTES from '../common/routes';
import { useStore } from '../../store';

const styles = (theme) => ({
  //NOTE: Router STYLES
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    overflow: 'hidden'
  }
});

const Router = ({ classes }) => {
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
    ROUTES.map(({ component: Component, ...rest }, i) =>
      i !== 0 ? ( //NOTE: apply authorization to all routes
        <Route
          {...rest}
          render={
            (props) => isLoggedIn
              ? <Component {...props} />
              : <Redirect to="/authenticate?type=login" />
          }
        />
      ) : (
        <Route
          {...rest}
          render={
            (props) => !isLoggedIn
              ? <Component {...props} />
              : <Redirect to="/games?type=draft" />
          }
        />
      )
    )
  );
};

Router.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Router);
