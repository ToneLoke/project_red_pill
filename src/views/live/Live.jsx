import React, { useState, useEffect } from 'react'
import { useStore } from '../../store'
import clientSocket from './clientSocket'

const Live = ({classes, match, history}) => {
  const { state: { user }, dispatch } = useStore()
  useEffect(()=>{
    if(user){
      clientSocket({ id: match.params.id, user })(dispatch)
    }else{
      dispatch({type: 'USER_INFO'}, true)
    }
  },[user])
  //TODO: socket logic
  return(
    <div>
      { !user ? "SHOW LOGIN MODAL" : `Hello, ${user.__U}`}
    </div>
  )
}

export default Live
