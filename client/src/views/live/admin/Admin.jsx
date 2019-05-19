// eslint-disable-line default-case

import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useStore } from '../../../store';
import { LeaderBoard, Questions, Timer } from '../../common/components';
import Overview from './Overview';
import styles from './Admin.styles';

const componentsList = {
  overview: Overview,
  questions: Questions,
  leaderBoard: LeaderBoard
};

const Admin = ({ classes }) => {
  const [page, changePage] = useState('overview');
  const Component = componentsList[page];
  return (
  <div className={classes.container}>
    <Typography variant="subtitle1" color="secondary">
      Next Question In:
    </Typography>
    <Timer />
    <Component handleChangePage={changePage}/>
  </div>
  );
};

export default withStyles(styles, {name: 'Admin'})(Admin);
