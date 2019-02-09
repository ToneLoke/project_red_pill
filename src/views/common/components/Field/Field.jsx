import React, {Fragment, useState, useEffect} from 'react'
import validate from 'validate.js'
import { constraints } from '../../../../utils/validations'
import inputs from '../TextInput';

const Field = ({ value, name, bubbleUp, className}) => {
  const [state, setState] = useState(value);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  }

  useEffect(() => {
    const validError = validate({ [name]: state}, constraints)
    if (validError) {
      setError(validError[name]);
    }
  }, [state])

  const mergeProps = { onChange: handleChange, onBlur: bubbleUp, error: !!error , helperText: error, className }

  return (
      <Fragment>
          { inputs[name]({...mergeProps}) }
      </Fragment>
  )
}

export default Field
