
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
});

const Layout = ({classes, header, content, footer}) => {

  return (
    <div className={classes.root}>
      <Grid container spacing={24} alignItems="stretch" direction="column" >
        <Grid item xs={12}>
          { header() }
        </Grid>
        <Grid item xs={12}>
          { content() }
        </Grid>
        <Grid item xs={12}>
          { footer() }
        </Grid>
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
