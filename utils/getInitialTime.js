import AsyncStorage from '@react-native-async-storage/async-storage';

const getInitialTime = async () => {

    let initialTime;

    try {
        initialTime = await AsyncStorage.getItem('initialPlayerTime');
        if (initialTime === null) {
            await AsyncStorage.setItem('initialPlayerTime', `${600}`);
            return 600;
        } else {
            return parseInt(initialTime);
        }

    } catch (error) {
        console.error('Error al actualizar datos:', error);
    }
};

export default getInitialTime;