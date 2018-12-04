
let instance = null;

class History {

	constructor(history){
		if(instance){
			return instance;
		}

		this.history = history;

		instance = this;
	}
}

export default (history) => {
	return new History(history);
}