import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BackIcon from "@material-ui/icons/ArrowBack";
import Fab from '@material-ui/core/Fab';
import { useStore } from '../../store';
import controls from '../common/controls';
import { NavBar, Questions } from '../common/components';
import Settings from './Settings';


const styles = {
  btnWrapper: {
    width: '90%',
  },
  btn: {
    marginTop: '20px',
    width: '100%',
  },
  full: {
    width: '100%',
  }
};

const Setup = ({ classes, history }) => {
  //======================= Connect to store using hooks =======================
  const { state: {game}, dispatch } = useStore();

  const path = history.location.pathname
  const fullPath =  history.location.pathname + history.location.search
  let page = history.location.search.split('=')[1] || "settings"
  useEffect(()=>{
    if(page === 'questions' && !game){
      history.push('/games?type=draft')
    }
    if(game && game.status === 'live'){
      history.push('/games?type=live')
    }
  })
  const renderActions = (a) => {
    return (
      <div key={a.key} className={classes.btnWrapper}>
        <Fab {...a.styles} disabled={true} onClick={() => dispatch({ type: 'GAME_NEW' })} className={classes.btn}>
          {!!a.text && a.text}
          {a.icon && <a.icon />}
        </Fab>
      </div>
    )
  }
  return (
    <Fragment>
      <NavBar title={`${ game ? game.title : 'New Session'} - ${page}`} path={path} fullPath={fullPath}/>
      { page === 'questions' ? <Questions /> :<Settings />  }
      { controls.actions[path] && controls.actions[path].map(renderActions) }
    </Fragment>
  );
}

Setup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Setup);
