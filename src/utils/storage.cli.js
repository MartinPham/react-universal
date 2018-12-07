import fs from 'fs';

const storageDirectory = './storage/';

export default {
    read(itemKey) {
        const item = fs.readAsync(storageDirectory + itemKey, 'utf8');
        if (item === null) {
            return null;
        }

        return JSON.parse(item);
    },

    edit(itemKey, itemValue) {
        fs.writeAsync(storageDirectory + itemKey, JSON.stringify(itemValue), 'utf8');
    },

    delete(itemKey) {
        fs.unlinkAsync(storageDirectory + itemKey);
    }
};
