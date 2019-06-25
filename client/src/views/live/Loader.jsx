import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
// Components
import CircularProgress from '@material-ui/core/CircularProgress';
import { Layout, ControlsBar } from '../common/components';
// Styles
import styles from './Loader.styles';

const Loader = ({ classes, header }) =>  (
  <Layout
    header={header}
    footer={<Route key="/control-bar" path="/" component={ControlsBar} />}
  >
    <div className={classes.main}>
      <div className={classes.suspense}>
        <div className={classes.progress}>
          <CircularProgress color="secondary" />
        </div>
        <div className={classes.overlay} />
      </div>
    </div>
  </Layout>
);

export default withStyles(styles, { name: 'Loader' })(Loader);
