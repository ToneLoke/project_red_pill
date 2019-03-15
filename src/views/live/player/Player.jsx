import React, { Fragment, useState, useEffect } from 'react'
import { useStore } from '../../../store'
import { GameInfo, Timer } from '../../common/components'

const PlayerScreens = ({classes}) => {
  const { state: { user, game }, dispatch } = useStore()
  const { current, questions } = game;

  // useEffect(()=>{
  //   if(user){
  //     clientSocket({ id: match.params.id, user })(dispatch)
  //   }else{
  //     dispatch({type: 'USER_INFO'}, true)
  //   }
  // },[user]fad
  //TODO: socket logic
  return(
    <Fragment>
      <Timer />
    </Fragment>
  )
}

export default PlayerScreens
