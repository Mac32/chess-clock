import AsyncStorage from '@react-native-async-storage/async-storage';

const setTimeGame = async (time) => {

  try {
    await AsyncStorage.setItem('initialPlayerTime', `${time}`);

  } catch (error) {
    console.error('Error al actualizar datos:', error);
  }
};

export default setTimeGame;