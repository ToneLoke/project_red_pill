import React, { useState, useEffect } from 'react'
import { useStore } from '../../store'
import clientSocket from './clientSocket'
import AdminScreens from './admin'
import PlayerScreens from './player'

const Live = ({classes, match, history}) => {
  const { state: { user, game }, dispatch } = useStore()

  useEffect(()=>{
    console.log("LIVE EFFECT")
    if(user && !game){
      console.log("attempt socket connection")
      clientSocket({ id: match.params.id, user })(dispatch)
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if(game && game.socket) {
        console.log("socket disconnect")
        game.socket.emit("disconnect")
      }
    };
  },[user, game])
  //TODO: socket logic
  return(
    <div>
      { !user || !game ? "Joining game..." :
        user._id === game.adminId._id ?
        <AdminScreens /> :
        <PlayerScreens />
      }
    </div>
  )
}

export default Live
