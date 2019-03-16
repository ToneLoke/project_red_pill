import React from 'react'
import { useStore } from '../../../store'
import { Timer } from '../../common/components'

const AdminScreens = ({classes}) => {
  const { state: { user, game, question }, dispatch } = useStore()
  const { maxTime } = question;
  const { status } = game;
  const timesUp = () => console.log("TIME UP ACTION")
  return(
    <div className="Admin-Container">
      <Timer maxTime={maxTime} onExpire={timesUp} status={status}/>
    </div>
  )
}

export default AdminScreens
