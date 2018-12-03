import { parse, stringify } from 'query-string';


function urlWithParams(route, params = {}) {
	const newParams = { ...params };

	for (const i in newParams) {
		if (route.indexOf(`/:${i}`) > -1) {
			route = route.replace(`/:${i}`, newParams[i]);
			delete newParams[i];
		}
	}

	return `${route}?${stringify(newParams)}`;
}



function getParam(key = '') {
	return '';
	const parsed = getAllParams();

	if (key === '') {
		throw 'Empty key';
	} else {
		return parsed[key];
	}
}

function getAllParams() {
	return {}; //location ? parse(location.search) : {};
}

export { getAllParams, getParam, urlWithParams };
