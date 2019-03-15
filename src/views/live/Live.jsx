import React, { Fragment, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStore } from '../../store'
import clientSocket from './clientSocket'
import AdminScreens from './admin'
import PlayerScreens from './player'
import {NavBar} from '../common/components'

const Live = ({classes, match, history}) => {
  const { state: { user, game }, dispatch } = useStore()
  const fullPath =  history.location.pathname + history.location.search
  const path = history.location.pathname
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
    <Fragment>
      <NavBar title={ !game ? "Loading data.." : `${game.title} - by ${game.adminId.username}`}  path={path} fullPath={fullPath}/>
      { !user || !game ? <div><CircularProgress color="primary"/></div> :
        user._id === game.adminId._id ?
        <AdminScreens /> :
        <PlayerScreens />
      }
    </Fragment>
  )
}

export default Live
