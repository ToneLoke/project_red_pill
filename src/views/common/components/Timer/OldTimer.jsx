import React, {useState} from 'react'
import ms from 'pretty-ms'

const defaultState = { isOn: false, time: 0, start: 0, timer: null}

const Timer = ({time: timeLimit}) => {
  const [state, setState] = useState(defaultState);
  const { timer, isOn, start, time} = state;

  const startTimer = () =>  {
    setState({
      ...state,
      isOn: true,
      start: Date.now() - time,
      timer: setInterval(() => setState({
        time: Date.now() - start
      }), 1)
    })
  }

  const stopTimer = () =>{
    setState({...state,isOn: false})
    clearInterval(timer)
  }

  const resetTimer = () => {
    setState(defaultState)
  }

    let play = (time === 0) ?
      <button onClick={startTimer}>play</button> :
      null
    let stop = (time === 0 || !isOn) ?
      null :
      <button onClick={stopTimer}>stop</button>
    let resume = (time === 0 || isOn) ?
      null :
      <button onClick={startTimer}>resume</button>
    let reset = (time === 0 || isOn) ?
      null :
      <button onClick={resetTimer}>reset</button>
    return(
      <div>
        <h3>timer: {ms(time)}</h3>
        {play}
        {resume}
        {stop}
        {reset}
      </div>
    )

}
export default Timer
