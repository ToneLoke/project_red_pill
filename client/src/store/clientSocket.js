import io from 'socket.io-client';
const baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://192.168.1.3:8000';
const configureSocket = ({id, user}) => dispatch => {
//======================= SOCKET CONNECTION =======================
  const socket = io.connect(`${baseURL}/${id}?_id=${user._id}&username=${user.username}`);
  socket.on('error', error => {
    dispatch({ type: "ALERT_ERROR", payload: { alert: {message: error}}})
  })
  socket.on('connected', data => {
    console.log("SOCKET CONNECTING")
    dispatch({type: 'GAME_SET', payload: { socket: socket, ...data}})
  })
//======================= END SOCKET CONNECTION =======================
//======================= INCOMING FROM SERVER =======================
  socket.on('NEW_PLAYER', data => {
    let msg = `${data} joined the game.`;
    //TODO: does not display admin joined
    if(user.isAdmin) msg = 'Game Admin joined.';
    if(user.username === 'lobby') msg = 'A spectator as joined the lobby';
    if(data !== user.username) dispatch({type: 'ALERT_SUCCESS', payload: {alert: {message: msg}}})
  })

  socket.on('GAME_UPDATED', payload => {
    dispatch({ type: 'LIVE_GAME_UPDATED', payload });
  });
//======================= END INCOMING FORM SERVER =======================
//======================= ADMIN EMITIONS =======================
//======================= END ADMIN EMITIONS =======================
//======================= PLAYER EMITIONS =======================
//======================= END PLAYER EMITIONS =======================

  // socket.on('UPDATED_QUESTION', payload => {
    //   dispatch({ type: 'QUESTION_SET', payload });
    // });

  // socket.on('NEW_PLAYER', payload => {
  //   dispatch({ type: 'PLAYERS_SET', payload });
  // });

  // socket.on('READY_PLAYER', payload => {
  //   dispatch({type: ''})
  // })


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
