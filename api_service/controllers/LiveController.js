import AppController from './AppController';

class LiveController extends AppController {

  // eslint-disable-next-line no-useless-constructor
  constructor(model,io, id) {
		super(model);
		this.gameId = id
		this.io = io;
		this.connected = this.connected.bind(this);
	}

	async connected(socket){
		try {
			const game = await this._model.findOne({_id: this.gameId}).populate('adminId')
			 this.io.emit('new player', socket.user.username)
			socket.emit('connected', game)
		} catch (error) {
			console.log("ERROR", error)
		}
	}


}
export default LiveController;
