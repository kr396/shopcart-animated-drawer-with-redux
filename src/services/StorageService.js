import AsyncStorage from '@react-native-community/async-storage';

export default class StorageService {

    /**
     * Saves `key-value` pair in to `AsyncStorage`
     * @param {string} key id for staring value
     * @param {any} value which need to be stored in async storage
     */
    saveItem = async (key, value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
        }
    }

    /**
     * Returns value of passed `key  from `AsyncStorage`
     * @param {string} key which value need to retrive from async storage
     */
    getItem = async (key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            // read error
        }
    };

    /**
     * Removes item from `AsyncStorage` which `key` is passed
     * @param {string} key which need to be removed from storage
     */
    removeValue = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (e) {
            // remove error
        }
    };

    /**
     * Crears all data from `AsyncStorage`
     */
    clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // clear error
        }
    };

}
