import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
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
    width: '100%'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
  }
});

const BottomAppBar = ({ classes, match }) => {
  const actions = Object.keys(controls).indexOf(match.path) >= 0 ? controls[match.url] : [];
  console.log("===CONTROLS BAR===",actions, match)
  return (
    <div position="fixed" className={classes.appBar}>
      <div className={classes.toolbar}>
        <Fab color="primary" arial-label="Home" className={classes.fabButton} component={Link} to="/">
          <HomeIcon />
        </Fab>
        { !!actions.length && actions.map( (c,i) => <Fab key={c.url} component={ c.component || null} className={classes[c.class]} color="secondary" to={`${match.url}${c.url}`} ><c.icon/></Fab>) }
      </div>
    </div>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
