import React from 'react'
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import styles from './Links.styles'

const NavLink = props => {
  const { classes, link: l } = props;
  return (
    <div className={classes.btnWrapper}>
      <Fab {...l} to={l.to} className={classes.link}>
        <l.icon />
      </Fab>
      <span className={classes.btnText}>
        {!!l.text && l.text}
      </span>
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
