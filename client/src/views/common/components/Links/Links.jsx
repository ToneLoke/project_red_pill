import React, { Fragment } from 'react'
import { MenuItem } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import styles from './Links.styles'

const NavLink = props => {
  const { classes, link: l, closeMenu} = props;
  return (
      <MenuItem selected={l.selected} onClick={closeMenu} to={l.to} className={classes.link} {...l}>
        { l.text && l.text }
      </MenuItem>
  );
};


const Links = (props) => {
  const { classes, links, closeMenu  } = props
  return (
    <Fragment>
      { links && links.map(link => <NavLink key={link.key} closeMenu={closeMenu} link={link} classes={classes} />)}
    </Fragment>
  )
}

export default withStyles(styles)(Links);
