import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getData(key, defaultData) {
    try {
        let dataString = await AsyncStorage.getItem(key);
        
        if (dataString == null) {
            await AsyncStorage.setItem(key, JSON.stringify(defaultData));
            return defaultData;
        } else {
            return dataString
        }

    } catch (error) {
        console.error('Error obtener datos:', error);
    }

}
