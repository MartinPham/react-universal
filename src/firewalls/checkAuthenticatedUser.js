export default {
	check(user, token) {
		// log('check firewall', user, token);

		if (token && user) {
			// if token & user is set -> proceed
			return true;
		}

		return false;
	},
	failedMessage: 'Access denied',
	failedUrl: '@Login',
};
