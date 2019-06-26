import React from "react";
import moment from "moment";
import PersonIcon from "@material-ui/icons/Person";
import {
  ListItemSecondaryAction,
  ListItem,
  ListItemText,
  ListSubheader,
  withStyles,
  Badge
} from "@material-ui/core";
import styles from "./Panel.styles";

const Groups = ({ title, games, classes, handleClick, game, isPublic }) => {
  return (
    <li key={title} className={classes.listSection}>
      <ul className={classes.ul}>
        <ListSubheader> {title.toUpperCase()} </ListSubheader>
        {games.map(g => {
          const secondaryText = isPublic
            ? g.adminId.username
            : `updated: ${moment(g.updatedAt).format("MM/DD/YY @ hh:mm a")}`;
          return (
            <ListItem
              key={g._id}
              button
              className={classes.listItemClass}
              onClick={() => handleClick(g)}
              selected={game && g._id === game._id}
            >
              <ListItemText primary={`${g.title}`} secondary={secondaryText} />
              {g.players && g.players.length > 0 && (
                <ListItemSecondaryAction>
                  <Badge
                    className={classes.badge}
                    fontSize="large"
                    color="secondary"
                    badgeContent={g.players.length}
                  >
                    <PersonIcon className={classes.icon} color="primary" fontSize="large" />
                  </Badge>
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
