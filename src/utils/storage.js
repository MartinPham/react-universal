export default {
    browse() {
        return Object.keys(localStorage).reduce((obj, str) => {
            obj[str] = this.read(str);
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

    deleteAll() {
        localStorage.clear();
    },
};
