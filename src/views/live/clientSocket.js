import io from 'socket.io-client';


const configureSocket = ({id, user}) => dispatch => {
  console.log("CLIENT SOCKET", user)
  const socket = io.connect(`http://localhost:8000/${id}?userId=${user._id}&username=${user.username}`);
  socket.on('connect', data => {
    console.log('Welcome to a live game!!', data);
    dispatch({ type:"ALERT_SUCCESS", payload: { alert: { message: "successfully connected to game"}}})
  });
  socket.on('connect_error', error => {
    dispatch({ type: "ALERT_ERROR", payload: { alert: {message: error}}})
  })

  socket.on('new player', data => console.log('new player',data))
  socket.on('connected', data => {
    dispatch({type: 'GAME_SET', payload: data})
    console.log('connected server emition',data)
  })

  // socket.on('UPDATED_QUESTION', payload => {
  //   dispatch({ type: 'QUESTION_SET', payload });
  // });

  // socket.on('NEW_PLAYER', payload => {
  //   dispatch({ type: 'PLAYERS_SET', payload });
  // });

  // socket.on('READY_PLAYER', payload => {
  //   dispatch({type: ''})
  // })

  // socket.on('GAME_PAUSE', payload => {
  //   dispatch({ type: 'GAME_PAUSE', payload });
  // });

  // socket.on('GAME_END', payload => {
  //   dispatch({ type: 'GAME_END', payload });
  // });

  // socket.on('GAME_PLAY', payload => {
  //   dispatch({ type: 'GAME_PLAY', payload });
  // });

  // const playerEvents = () => {
  //   socket.on('RESOLVE_SUBMISSION', payload => {
  //     dispatch({ type: 'QUESTION_RESULT', payload });
  //   });
  // }

  return socket;
};

export default configureSocket;
