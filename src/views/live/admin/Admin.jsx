import React, { useState, useEffect } from 'react'
import { useStore } from '../../../store'

const AdminScreens = ({classes}) => {
  const { state: { user }, dispatch } = useStore()
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
    </div>
  )
}

export default AdminScreens
