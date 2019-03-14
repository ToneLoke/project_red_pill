import React, {Fragment, useState, useEffect} from 'react'
import validate from 'validate.js'
import { constraints } from '../../../../utils/validations'
import Input from '../Input';

const Field = ({ bubbleUp, ...rest }) => {
  const { value, name } = rest;
  const [state, setState] = useState(value);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  }

  const handleBlur = e => {
    if(error){
      console.log(`Error from field:`, e.target.name)
    }else{
      bubbleUp(e)
    }
  }

  useEffect(() => {
    const validError = validate({ [name]: state}, constraints)
    if (validError) {
      setError(validError[name]);
    }
  }, [state])



  const mergeProps = {  ...rest, onChange: handleChange, onBlur: handleBlur, error: !!error , helperText: error, value: state }

  return (
      <Fragment>
          <Input {...mergeProps} />
      </Fragment>
  )
}

export default Field
