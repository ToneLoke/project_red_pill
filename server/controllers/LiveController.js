import AppController from './AppController';

class LiveController extends AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(model, io, id) {
    super(model);
    this.gameId = id;
    this.io = io;
    this.connected = this.connected.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  async connected(socket) {
    try {
      const game = await this._model
        .findOne({ _id: this.gameId })
        .populate('adminId')
        .populate('questions');
      console.log(game.adminId._id);
      if (socket.user._id != game.adminId._id) game.addPlayer(socket.user);
      this.io.emit('NEW_PLAYER', socket.user.username);
      this.io.emit('connected', game);
    } catch (error) {
      console.log('ERROR', error);
    }
  }
  async updateGame(update) {
    const game = await this._model
      .findOneAndUpdate({ _id: this.gameId })
      .populate('adminId')
      .populate('questions');
  }
}
export default LiveController;
