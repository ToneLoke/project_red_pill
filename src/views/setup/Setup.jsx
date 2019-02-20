import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { useStore } from '../../store';
import controls from '../common/controls';
import { AdminBar } from '../common/components';
import Settings from './Settings';
import Questions from './Questions';


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
  const page = history.location.search.split('=')[1] || "Settings"
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
      <AdminBar title={`${game.title || 'New Session'} - ${page}`} icon="prev" action="goBack" />
      { page === 'questions' ? <Questions /> :<Settings />  }
      { controls.actions[path] && controls.actions[path].map(renderActions) }
    </Fragment>
  );
}

Setup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Setup);
