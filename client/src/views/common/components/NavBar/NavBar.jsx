import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import BackIcon from "@material-ui/icons/ArrowBack";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import Links from "../Links";
import { useStore } from "../../../../store";
import controls from "../../controls";
import { isEmpty } from "../../helpers";

const styles = {
  root: {
    // flexGrow: 1,
    backgroundColor: "#3B55AB",
    width: "100%"
  },
  grow: {
    // flexGrow: 1,
    marginLeft: "8px"
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20,
  },
  toolbar: {
    height: 64,
    padding: 0,
    justifyContent: "space-between"
  }
};

// //======================= Find the controls to display based off the current url =======================

function TopBar(props) {
  const { classes, title, path, fullPath, showBack = true } = props;
  const {
    state: { user, router },
    dispatch
  } = useStore();
  const [menuOpen, toggleMenu] = useState(false);
  const [anchorEl, setAnchor] = useState(null);

  let links = controls.nav[path] || null;
  //NOTE: add extra field to detect if current route (change btn color)
  if (links)
    links = links.map(l =>
      l.to === fullPath ? { ...l, selected: true } : { ...l, selected: false }
    );

  const setMenu = e => {
    if (anchorEl) {
      setAnchor(null);
    } else {
      setAnchor(e.currentTarget);
    }
    toggleMenu(!menuOpen);
  };

  const logout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };

  const goBack = () => {
    let go = true
    if (
      router.location.pathname.indexOf("live") > -1 &&
      !router.location.search
    ) {
      go = window.confirm(
        "You are attempting to leave a live session, are you sure?"
      );
    }
    return go ? router.goBack() : null;
  };
  //TODO: move navigation to menu items from controls
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          {showBack && (
            <IconButton
              className={classes.backBtn}
              color="inherit"
              aria-label="Back"
              onClick={goBack}
            >
              <BackIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={setMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={setMenu}
        TransitionComponent={Fade}
      >
        <Links links={links} closeMenu={setMenu} />
        {!isEmpty(user) && (
          <MenuItem selected={false} onClick={logout}>
            {`LOGOUT ${user.username || "?"}`}
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
