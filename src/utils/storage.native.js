import { AsyncStorage } from "react-native"

export default {


    async read(itemKey) {
        console.log('>>>> read', itemKey)
        try {
            const item = await AsyncStorage.getItem(itemKey);
            if (item === null) {
                return null;
            }
            return JSON.parse(item);
        } catch (error) {
            console.log('read error', error);
            return null;
        }

    },

    async edit(itemKey, itemValue) {
        console.log('edit', itemKey, itemValue)
        try {
            await AsyncStorage.setItem(itemKey, JSON.stringify(itemValue));
        } catch (error) {
            console.log('edit error', error);
        }
    },

    async delete(itemKey) {
        console.log('delete', itemKey)
        try {
            await AsyncStorage.removeItem(itemKey);
        } catch (error) {
            console.log('delete error', error);
        }
    }
};
