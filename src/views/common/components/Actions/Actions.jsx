import React from 'react'
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import styles from './Actions.styles'


const CreateFab = props => {
  const { classes, action: a, dpHandler } = props
  return (
    <div className={classes.btnWrapper}>
      <Fab
        {...a.styles}
        onClick={dpHandler}
        className={classes.action}
      >
        {a.icon && <a.icon />}
      </Fab>
      <span className={classes.btnText}>
        {!!a.text && a.text}
      </span>
    </div>
  )
}


const Actions = (props) => {
  const { actions, classes } = props
  return (
    <div className={classes.container}>
      {actions.map((a) => <CreateFab action={a} {...props} />)}
    </div>
  )
}

export default withStyles(styles)(Actions);
