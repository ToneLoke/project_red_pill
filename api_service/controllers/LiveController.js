class AppController {
	constructor(model) {
		this._model = model;
		this.liveGames = this.liveGames.bind(this);
	}

	async liveGames(findObj) {
		try {
			const document = await this._model.findOne(findObj);
			return document;
		} catch (e) {
			throw Error(e);
		}
	}

}

export default AppController;;
