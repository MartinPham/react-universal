import log from 'loglevel';

let historyInstance = null

export default (history = null) => {
	if(historyInstance === null)
	{
		log.info('[history] Creating history instance')
		historyInstance = history
	}

	return historyInstance
}