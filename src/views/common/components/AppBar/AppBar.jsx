import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
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
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%'
  },
});

const BottomAppBar = ({ classes, history }) => {
  //======================= Find the controls to display based off the current url =======================
  console.log("===CONTROLS BAR===", history)
  const actions = controls[history.location.pathname] || null;
  const makeControls = (c) => {
    if(c.type === "link"){
    return(
      <div className={classes.btn}>
        <Fab
          key={c.key}
          component={c.component}
          className={classes["link"]}
          color="primary"
          to={`${history.location.pathname}${c.url}`} >
          <c.icon />
        </Fab>
      </div>
    )
    }else{
      return(
        <div className={classes.btn}>
        <Fab
          key={c.key}
          component={c.component}
          className={classes["button"]}
          color="primary"
         >
          <c.icon />
        </Fab>
      </div>
      )
    }
  }

  return (
    <div position="fixed" className={classes.appBar}>
      <div className={classes.toolbar}>
        <div className={classes.btn} >
          <Fab color="primary" arial-label="Home" component={Link} to="/">
            <HomeIcon />
          </Fab>
        </div>
        { actions && actions.map(makeControls) }
      </div>
    </div>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
