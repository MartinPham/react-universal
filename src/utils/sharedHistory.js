import log from 'loglevel';

let historyInstance = null

export default (history = null) => {
	if(history !== null)
	{
		log.info('[history] Setting history instance')
		historyInstance = history
	}

	return historyInstance
}