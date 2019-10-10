// var localStorage = localStorage || {
// 	getItem: () => null,
// 	setItem: () => {},
// 	removeItem: () => {},
// }


export default {

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
    }
};
