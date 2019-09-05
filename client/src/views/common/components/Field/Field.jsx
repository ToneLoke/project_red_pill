import React, { Fragment, useState, useEffect } from 'react'
import validate from 'validate.js'
import { constraints } from '../../../../utils/validations'
import Input from '../Input';

const Field = ({ bubbleUp, ...rest }) => {
  const { value, name } = rest;
  const [state, setState] = useState(value);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  const handleChange = e => {
    setState(e.target.value);
  }

  const handleBlur = e => {
    if (error) {
      console.log(`Error from field:`, e.target.name)
    } else {
      bubbleUp(e)
    }
  }

  const handleFocus = () => {
    if (!touched) setTouched(true)
  }

  useEffect(() => {
    const validError = validate({ [name]: state }, constraints)
    if (validError && touched) {
      const errors = validError[name];
      console.log('validation', validError[name])
      if (errors && errors.length > 1) {
        setError(errors[0])
      } else {
        setError(errors);
      }
    }
  }, [state, touched])

  const mergeProps = { ...rest, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, error: !!error, helperText: error, value: state }

  return (
    <Fragment>
      <Input {...mergeProps} />
    </Fragment>
  )
}

export default Field
