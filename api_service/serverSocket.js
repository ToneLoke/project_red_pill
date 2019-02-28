

//======================= CONFIGURE SOCKET FOR EACH PUBLISHED GAME =======================

export default function setupGameSocket(gameIO){
  gameIO.on('connection', socket => {
    console.log("===========SOMEONE CONNECTED================")
    console.log(gameIO, socket)
  })
}
