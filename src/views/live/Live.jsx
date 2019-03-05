import React, { useState, useEffect } from 'react'
import { useStore } from '../../store'
import clientSocket from './clientSocket'

const Live = ({classes, match, history}) => {
  const { state: { user }, dispatch } = useStore()
  console.log(match.params.id)
  useEffect(()=>{
    if(user.email){
      clientSocket({ id: match.params.id, user })(dispatch)
    }
  },[])
  //TODO: socket logic
  return(
    <div>
      { !user.email ? "SHOW LOGIN MODAL" : `Hello, ${user.email}`}
    </div>
  )
}

export default Live
