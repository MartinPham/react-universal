import fs from 'fs';

const storageDirectory = './storage/';

// TODO implement simple key-value storage

export default {
    read(itemKey) {
        try {
            const item = fs.readFileSync(storageDirectory + itemKey, 'utf8');
            if (item === null) {
                return null;
            }

            return JSON.parse(item);
        } catch(e) {}
    },

    edit(itemKey, itemValue) {
        try {
            fs.writeFileSync(storageDirectory + itemKey, JSON.stringify(itemValue), 'utf8');
        } catch(e) {}
    },

    delete(itemKey) {
        try {        
            fs.unlinkSync(storageDirectory + itemKey);
        } catch(e) {}
    }
};
