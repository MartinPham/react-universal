import axios from 'axios';
import qs from 'qs';

const request = (url, options = {}) => {
	options.url = url;
	options.headers = {
		...options.headers,
		'content-type': 'application/x-www-form-urlencoded',
	};
	options.data = options.data ? qs.stringify(options.data) : null;

	const CancelToken = axios.CancelToken;
	const source = CancelToken.source();

	options.cancelToken = source.token;

	const requestObject = axios.request(options);

	requestObject.cancel = () => {
		source.cancel();
	};

	return requestObject;
};

// window.request = request;
export default request;

export function get(url, options = {}) {
	options.method = 'get';
	return request(url, options);
}

export function post(url, data = {}, options = {}) {
	options.method = 'post';
	options.data = data;
	return request(url, options);
}

/*
export default function request(url, options = {})
{
	return fetch(url, options)
			.then(result => result.json())
			.then(data => ({
				data
			}));
}

export function get(url, options = {})
{
	options.method = 'get';
	return request(url, options);
}

export function post(url, data = {}, options = {})
{
	options.method = 'post';
	options.data = data;
	return request(url, options);
}

*/
