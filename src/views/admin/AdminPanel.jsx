import React from 'react'
import AppBar from '../common/components/AppBar'
import Games from './GameSelect.jsx'

const AdminPanel = () => {
  return(
    <React.Fragment>
      <Games />
      <AppBar />
    </React.Fragment>
  )
}

export default AdminPanel;
