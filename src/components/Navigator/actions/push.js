import { PUSH } from '../constants';

/**
 * Push new screen
 *
 * @param path Path of screen
 * @param data Data passing to screen
 * @param transition Animation (left | up)
 * @param origin Origin of animation
 */
export default function(path, data, transition, origin) {
	return {
		type: PUSH,
		path,
		data: data || {},
		transition,
		origin: origin ? JSON.stringify(origin) : null,
	};
}
