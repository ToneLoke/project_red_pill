import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography, Fab } from '@material-ui/core';
import styles from './Actions.styles'


const CreateFab = props => {
  const { classes, action: a, dpHandler } = props
  const handleClick = () => dpHandler(a.actionType, a.isReq, a.data)
  return (
    <div className={classes.btnWrapper}>
      <Fab
        {...a.styles}
        disabled={a.disabled}
        onClick={handleClick}
        className={classes.action}
      >
        {a.icon && <a.icon />}
      </Fab>
      <Typography variant="caption" color="secondary" className={classes.btnText}>
        {!!a.text && a.text}
      </Typography>
    </div>
  )
}


const Actions = (props) => {
  const { actions, classes } = props
  return (
    <div className={classes.container}>
      {actions && actions.map((a) => <CreateFab key={a.key} action={a} {...props} />)}
    </div>
  )
}

export default withStyles(styles)(Actions);
