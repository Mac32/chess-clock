import AsyncStorage from '@react-native-async-storage/async-storage';

const updateData = async (newDataObject, initialTime, increment) => {

  try {
    await AsyncStorage.setItem('dataPresets', JSON.stringify(newDataObject));
    await AsyncStorage.setItem('initialTime', JSON.stringify(initialTime));
    await AsyncStorage.setItem('incrementTime', JSON.stringify(increment));

  } catch (error) {
    console.error('Error al actualizar datos:', error);
  }
};

export default updateData;