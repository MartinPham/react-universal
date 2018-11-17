import { ROUTE_MOUNTED } from '../constants';

export default function(data) {
	return {
		type: ROUTE_MOUNTED,
		data
	};
}
