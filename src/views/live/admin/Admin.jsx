import React from 'react'
import { useStore } from '../../../store'
import { GameInfo } from '../../common/components'

const AdminScreens = ({classes}) => {
  const { state: { user, game, question }, dispatch } = useStore()
  const timesUp = () => console.log("TIME UP ACTION")
  return(
    <div className="Admin-Container">
      <GameInfo game={game} timesUp={timesUp} selPlayer={user}/>
    </div>
  )
}

export default AdminScreens
