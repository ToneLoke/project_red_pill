import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    position: 'relative',
    borderRadius: '50%',
    background: 'white',
    boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
    padding: theme.spacing.unit / 2,
  },
  content: {
    display: 'flex',
    padding: theme.spacing.unit / 4,
    borderRadius: '50%',
    fontSize: 14
  }
});

const RoundIcon = ({ classes, Icon, backgroundColor }) => (
  <div className={classes.container}>
    <div className={classes.content} style={{backgroundColor}}>
      <Icon color="secondary" fontSize="inherit" />
    </div>
  </div>
);

export default withStyles(styles)(RoundIcon);
