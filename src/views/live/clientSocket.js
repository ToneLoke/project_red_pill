import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const configureSocket = dispatch => {
  socket.on('connect', () => {
    console.log('Welcome to a live game!!');
  });

  socket.on('UPDATED_QUESTION', payload => {
    dispatch({ type: 'QUESTION_SET', payload });
  });

  socket.on('NEW_PLAYER', payload => {
    dispatch({ type: 'PLAYERS_SET', payload });
  });

  socket.on('READY_PLAYER', payload => {
    dispatch({type: ''})
  })

  socket.on('GAME_PAUSE', payload => {
    dispatch({ type: 'GAME_PAUSE', payload });
  });

  socket.on('GAME_END', payload => {
    dispatch({ type: 'GAME_END', payload });
  });

  socket.on('GAME_PLAY', payload => {
    dispatch({ type: 'GAME_PLAY', payload });
  });

  // const playerEvents = () => {
  //   socket.on('RESOLVE_SUBMISSION', payload => {
  //     dispatch({ type: 'QUESTION_RESULT', payload });
  //   });
  // }

  return socket;
};

export const submitAnswer = (payload) => socket.emit('SUBMIT_ANSWER', payload);

export const joinGame = name => socket.emit('JOIN_GAME', name);

export default configureSocket;
