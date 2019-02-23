import React, { Fragment, useEffect } from "react";
// import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import { AdminBar } from "../common/components";
import { useStore } from "../../store";
import controls from "../common/controls";
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
      <AdminBar title="Sessions" />
      {!games ? (
        "Loading.."
      ) : games.length === 0 ? (
        <Paper className={classes.container}>
          <Typography variant="h6" color="inherit">
            You have no saved games.
          </Typography>
          <Typography variant="h6" color="inherit">
            Please press '+' below.
          </Typography>
        </Paper>
      ) : (
        <Paper className={classes.container}>
          {renderGames(classes.listItem)}
        </Paper>
      )}
    </Fragment>
  );
};

export default withStyles(styles)(Games);
