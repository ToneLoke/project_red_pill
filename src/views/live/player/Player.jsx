import React, { Fragment, useState, useEffect } from 'react'
import { useStore } from '../../../store'
import { GameInfo, Timer } from '../../common/components'

const PlayerScreens = ({classes}) => {
  const { state: { user, game, question }, dispatch } = useStore()
  const { maxTime } = question;
  const { status } = game;
  const timesUp = () => console.log("TIME UP ACTION")
  return(
    <div className="Player-Container">
      <Timer maxTime={maxTime || 0} onExpire={timesUp} status={status || 'live'}/>
    </div>
  )
}

export default PlayerScreens
