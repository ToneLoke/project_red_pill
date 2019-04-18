import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Typography, Fab } from '@material-ui/core';
import styles from './Navs.styles';

const CreateFabNav = (props) => {
  const { classes, nav: n, page } = props;
	console.log("TCL: CreateFabNav -> props", props)
  return (
    <div className={classes.btnWrapper}>
      <Link to={`${n.to}`} className={classes.link}>
        <Fab {...n.styles} color={n.styles[page].color} disabled={n.disabled} className={classes.nav}>
          {n.icon && <n.icon />}
        </Fab>
        <Typography variant="caption" color={n.styles[page].color} className={classes.btnText}>
          {!!n.text && n.text}
        </Typography>
      </Link>
    </div>
  );
};

const Navs = (props) => {
  const { navs, classes } = props;
  return (
    <div className={classes.container}>
      {navs && navs.map((n) => <CreateFabNav key={n.key} nav={n} {...props} />)}
    </div>
  );
};

export default withStyles(styles)(Navs);
