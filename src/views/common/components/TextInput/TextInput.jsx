import React, {memo} from 'react'
//NOTE: button is disabled unless needed in the future
const TextInput = (props) => {
  const { type } = props;
  return(
    <div className={`Input-wrapper ${type}`}>
      <input {...props}></input>
      {/*<button type="submit"><span>></span></button>*/}
    </div>
  )
}

const arePropsEqual = (prevProps, nextProps) => {
  return prevProps.value === nextProps.value
}

export default memo(TextInput, arePropsEqual)
