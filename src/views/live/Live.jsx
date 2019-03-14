import React, { useState, useEffect } from 'react'
import { useStore } from '../../store'
import clientSocket from './clientSocket'
import AdminScreens from './admin'
import PlayerScreens from './player'

const Live = ({classes, match, history}) => {
  const { state: { user, game }, dispatch } = useStore()
  useEffect(()=>{
    if(user){
      console.log("connecting to socket")
      clientSocket({ id: match.params.id, user })(dispatch)
    }
  },[user])
  //TODO: socket logic
  return(
    <div>
      { !user || !game ? "Joining game..." :
        user.games && user.games.indexOf(match.params.id) > -1 ?
        <AdminScreens /> :
        <PlayerScreens />
      }
    </div>
  )
}

export default Live
