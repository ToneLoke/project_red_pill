import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import controls from '../../controls';


const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing.unit * 2
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    position: 'fixed',
    display: 'flex',
    top: 'auto',
    bottom: 45,
    backgroundColor: 'transparent',
    width: '100%',
    zIndex: 100
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%'
  },
});

const BottomAppBar = ({ classes, history }) => {
  console.count("AppBar.jsx")
  //======================= Find the controls to display based off the current url =======================
  const actions = controls.nav[history.location.pathname] || null;
  const makeNavLinks = (c) => {
    return (
      <div key={c.key} className={classes.btn}>
        <Fab {...c} to={c.to} className={classes["link"]} >
          <c.icon />
          { c.text }
        </Fab>
      </div>
    )
  }

  return (
    <div position="fixed" className={classes.appBar}>
      <div className={classes.toolbar}>
        {actions && actions.map(makeNavLinks)}
      </div>
    </div>
  );
}


BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
