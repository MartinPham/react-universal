import fs from 'fs';

// TODO implement simple key-value storage

export default {
    read(itemKey) {
        try {
            const item = fs.readFileSync(process.env.STORAGE_DIRECTORY + itemKey, 'utf8');
            if (item === null) {
                return null;
            }

            return JSON.parse(item);
       	} catch(e) 
       	{}
       	// { console.log(e)}
    },

    edit(itemKey, itemValue) {
        try {
            fs.writeFileSync(process.env.STORAGE_DIRECTORY + itemKey, JSON.stringify(itemValue), 'utf8');
        } catch(e) 
       	{}
        // { console.log(e)}
    },

    delete(itemKey) {
        try {        
            fs.unlinkSync(process.env.STORAGE_DIRECTORY + itemKey);
        } catch(e) 
       	{}
        // { console.log(e)}
    }
};
