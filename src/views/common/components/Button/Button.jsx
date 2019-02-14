import React from 'react'
import Fab from '@material-ui/core/Fab';
export default (props) => (
  <div className="btn">
    <Fab {...props}>
      { props.children }
    </Fab>
  </div>
)
