import React, { useState, useEffect } from 'react'
import { useStore } from '../../store'
import clientSocket from './clientSocket'
import AdminScreens from './admin'
import PlayerScreens from './player'

const Live = ({classes, match, history}) => {
  const { state: { user }, dispatch } = useStore()
  useEffect(()=>{
    if(user){
      clientSocket({ id: match.params.id, user })(dispatch)
    }
  },[user])
  //TODO: socket logic
  return(
    <div>
      { !user ? "Joining game..." :
        user.games && user.games.indexOf(match.params.id) > -1 ?
        <AdminScreens /> :
        <PlayerScreens />
      }
    </div>
  )
}

export default Live
