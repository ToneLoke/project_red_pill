import React from "react";
import moment from "moment";
import PersonIcon from "@material-ui/icons/Person";
import {
  ListItemSecondaryAction,
  ListItem,
  ListItemText,
  ListSubheader,
  withStyles
} from "@material-ui/core";
import styles from "./Panel.styles";

const Groups = ({ title, games, classes, handleClick, game }) => {
  return (
    <li key={title} className={classes.listSection}>
      <ul className={classes.ul}>
        <ListSubheader> {title.toUpperCase()} </ListSubheader>
        {games.map(g => {
          return (
            <ListItem
              key={g._id}
              button
              className={classes.listItemClass}
              onClick={() => handleClick(g)}
              selected={game && g._id === game._id}
            >
              <ListItemText
                primary={`${g.title}`}
                secondary={`updated: ${moment(g.updatedAt).format(
                  "MM/DD/YY @ hh:mm a"
                )}`}
              />
              {g.players && g.players.length > 0 && (
                <ListItemSecondaryAction>
                  {g.players.length}
                  <PersonIcon fontSize="small" />
                </ListItemSecondaryAction>
              )}
            </ListItem>
          );
        })}
      </ul>
    </li>
  );
};

export default withStyles(styles)(Groups);
