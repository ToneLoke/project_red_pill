import React, { useState, useEffect } from 'react'
import { useStore } from '../../../store'
import { GameInfo } from '../../common/components'

const AdminScreens = ({classes}) => {
  const { state: { user, game }, dispatch } = useStore()
  // useEffect(()=>{
  //   if(user){
  //     clientSocket({ id: match.params.id, user })(dispatch)
  //   }else{
  //     dispatch({type: 'USER_INFO'}, true)
  //   }
  // },[user])
  //TODO: socket logic
  return(
    <div>
      Admin Screens
      <GameInfo game={game} />
    </div>
  )
}

export default AdminScreens
