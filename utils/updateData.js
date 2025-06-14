import AsyncStorage from '@react-native-async-storage/async-storage';

const updateData = async (newDataObject, initialTime) => {

  try {
    await AsyncStorage.setItem('timePresets', JSON.stringify(newDataObject));
    await AsyncStorage.setItem('initialTime', JSON.stringify(initialTime));

  } catch (error) {
    console.error('Error al actualizar datos:', error);
  }
};

export default updateData;