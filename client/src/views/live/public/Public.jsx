import React, { Fragment, useState, useEffect } from 'react'
import { useStore } from '../../../store'
import { withStyles } from "@material-ui/core/styles"
import { GameInfo } from '../../common/components'
import styles from './Public.styles';

const PublicScreens = ({classes}) => {
  const { state, dispatch } = useStore()
  const timesUp = () => console.log("TIME UP ACTION")
  return(
    <div className={classes.container}>
      <GameInfo {...state} timesUp={timesUp} endUser={state.user}/>
    </div>
  )
}

export default withStyles(styles)(PublicScreens);
