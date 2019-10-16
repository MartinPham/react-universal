export const PLATFORM_BROWSER = 'browser'
export const PLATFORM_NODE = 'node'
export const PLATFORM_UNDEFINED = 'undefined'

export const getPlatform = () => {
	let platform = PLATFORM_UNDEFINED

	if (typeof document !== 'undefined') {
	  // I'm on the web!
	  platform = PLATFORM_BROWSER
	}
	else {
	  // I'm in node js
	  platform = PLATFORM_NODE
	}

	return platform
}