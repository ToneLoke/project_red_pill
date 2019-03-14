import GameModel from './models/Game';
import LiveController from './controllers/LiveController'
//======================= CONFIGURE SOCKET FOR EACH PUBLISHED GAME =======================

export default function setupGameSocket(gameIO, id){
  const liveCtrl = new LiveController(GameModel,gameIO, id)
  //TODO: add security for sockets via io.use
  gameIO.use( (socket, next) => {
    let {userId, username} = socket.handshake.query
    if(userId && username){
      socket.user = { userId, username }
      return next()
    }else{
      console.log("FAILED")
      return next(new Error('no user in socket'))
    }
  })

  gameIO.on('connection', socket => {
    liveCtrl.connected(socket);
    //add player to game roster
    //get game data
  })
}
