export default (options = {}) => {
	let hasCanceled = false;

	const wrappedPromise = new Promise((resolve, reject) => {
		if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
			navigator.geolocation.getCurrentPosition(
				position => {
					if (!hasCanceled) {
						resolve(position);
					} else {
						reject({
							error: 'Cancelled',
						});
					}
				},
				error => {
					if (!hasCanceled) {
						reject({
							error,
						});
					} else {
						reject({
							error: 'Cancelled',
						});
					}
				},
				options,
			);
		} else if (!hasCanceled) {
			reject({ failure: 'Geolocation API is not available' });
		} else {
			reject({
				error: 'Cancelled',
			});
		}
	});

	wrappedPromise.cancel = () => {
		hasCanceled = true;
	};

	return wrappedPromise;
};
