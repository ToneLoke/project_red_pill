import React, { Fragment, useEffect } from "react";
// import PropTypes from 'prop-types';
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import { AdminBar } from "../common/components";
import { useStore } from "../../store";
import {
  ListItemSecondaryAction,
  Checkbox,
  Paper,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

// import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  container: {
    width: "100%",
    marginBottom: "18%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  progress: {
    margin: 12,
    flexGrow: 1,
  },
  btnWrapper: {
    width: "90%"
  },
  btn: {
    width: "100%"
  },
  listItem: {
    borderBottom: "1px solid #dddddd",
    paddingBottom: 20
  }
});

const Games = ({ classes, history }) => {
  const {
    state: { games },
    dispatch
  } = useStore();
  console.count("Panel.jsx");

  useEffect(() => {
    console.log("DID MOUNT", games);
    if (!games) {
      dispatch({ type: "GAME_FETCH_ALL" });
    }
  });

  const renderGames = listItemClass => {
    return (
      <List>
        {games.map(g => {
          return (
            <ListItem key={g._id} button className={listItemClass}>
              <ListItemText primary={`${g.title}`} secondary={`${g.status}`} />
              <ListItemSecondaryAction>
                <Checkbox onChange={() => {}} />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    );
  };
  return (
    <Fragment>
      <AdminBar title="Sessions" icon={MenuIcon} handleClick={()=>{}}/>
      {!games ? (
        <div><CircularProgress className={classes.progress} color="primary" /></div>
      ) : games.length === 0 ? (
        <Paper className={classes.container}>
          <Typography variant="body2" color="inherit">
            You have no saved games.
          </Typography>
          <Typography variant="body2" color="inherit">
            Please press '+' below.
          </Typography>
        </Paper>
      ) : <Fragment> {renderGames(classes.listItem)}</Fragment>
      }
    </Fragment>
  );
};

export default withStyles(styles)(Games);
