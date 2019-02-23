import React from 'react'
import { Typography, Fab } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import styles from './Links.styles'

const NavLink = props => {
  const { classes, link: l } = props;
  return (
    <div className={classes.btnWrapper}>
      <Fab {...l} color={ l.isActive ? "secondary" : "primary"} to={l.to} className={classes.link}>
        <l.icon />
      </Fab>
      <Typography variant="caption" color="secondary" className={classes.btnText}>
        {!!l.text && l.text}
      </Typography>
    </div>

  );
};


const Links = (props) => {
  const { classes, links } = props
  return (
    <div className={classes.container}>
      {links.map(link => <NavLink key={link.key} link={link} classes={classes} />)}
    </div>
  )
}

export default withStyles(styles)(Links);
