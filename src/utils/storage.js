export default {
	browse() {
		return Object.keys(localStorage).reduce((obj, str) => {
			obj[str] = localStorage.getItem(str);
			return obj;
		}, {});
	},

	read(itemKey) {
		const item = localStorage.getItem(itemKey);
		if (item === null) {
			return null;
		}

		return JSON.parse(item);
	},

	edit(itemKey, itemValue) {
		localStorage.setItem(itemKey, JSON.stringify(itemValue));
	},

	delete(itemKey) {
		localStorage.removeItem(itemKey);
	},

	deleteAll(itemKey) {
		localStorage.clear();
	},
};
