
import LiveController from './controllers/LiveController'
//======================= CONFIGURE SOCKET FOR EACH PUBLISHED GAME =======================

export default function setupGameSocket(gameIO){
  //TODO: add security for sockets via io.use
  gameIO.use( (socket, next) => {
    let user = socket.handshake.query.user
    console.log("MID", user)
    if(user && user !== "null"){
      return next()
    }else{
      console.log("FAILED")
      return next(new Error('no user in socket'))
    }
  })
  gameIO.on('connection', socket => {
    console.log("===========SOMEONE CONNECTED================")
    console.log(socket.id, socket.handshake)
  })
}
