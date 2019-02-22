import React from 'react'
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import styles from './Actions.style'


const CreateFab = withStyles(styles)( props => {
  const { classes, action: a, dpHandler } = props
  return (
    <div key={a.key} className={classes.btnWrapper}>
      <Fab
        {...a.styles}
        onClick={dpHandler}
        className={classes.btn}
      >
      {a.icon && <a.icon />}
      </Fab>
      <span className={classes.btnText}>
      {!!a.text && a.text}
      </span>
    </div>
  )
})


const Actions = (props) => {
  const { actions } = props
  return(
    <div className="actions-container">
      {actions.map((a) => <CreateFab action={a} {...props} />)}
    </div>
  )
}

export default withStyles(styles)(Actions);
