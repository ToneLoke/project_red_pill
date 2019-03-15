import React from 'react'
import {
  ListItemSecondaryAction,
  List,
  ListItem,
  ListItemText,
  Badge
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import styles from './GameInfo.styles'

const PlayerList = ({players, selPlayer}) => {
  return (
    <List>
      {players.map( p => {
        return (
          <ListItem key={p._id} button  selected={ selPlayer && p._id === selPlayer._id}>
            <ListItemText primary={`${p.username}`} secondary={`2/10`}/>
            <ListItemSecondaryAction>
              <Badge fontSize="large" color="primary" badgeContent={5} />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

const GameInfo = ({game, classes}) => (
  <div className={classes.container}>
    <div className={classes.title}>
      <div>{game.title}</div><div>{game.adminId.username}</div>
    </div>
    <div className={classes.status}>
      <div>00:00</div><div># 2/10</div>
    </div>
    <div className={classes.heading}>
      <div>Players: {game.players.length}</div><div>Total: {game.totalPoints}</div>
    </div>
    <PlayerList players={game.players} selPlayer={null} />
  </div>
)

export default withStyles(styles, {name: 'GameInfo'})(GameInfo)
