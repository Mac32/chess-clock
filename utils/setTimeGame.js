import { router } from 'expo-router';
import updateData from './updateData';

const setTimeGame = async (dataPresets, setInitialTimePlayer1, setInitialTimePlayer2, setTimePlayer1, setTimePlayer2) => {
  
  let initial = 0
  dataPresets.map((preset, i) => {
    if (preset.select) {
      initial = parseInt(preset.time) * 60
    }
  });
  const update = async () => {
    try {

      await updateData(dataPresets, initial);
      setInitialTimePlayer1(initial);
      setInitialTimePlayer2(initial);
      setTimePlayer1(initial);
      setTimePlayer2(initial);

    } catch (e) {
      console.log('ocurrio un error al setiar en setTimeGame: ' + e)
    }
  }
  update()
  router.back()
};

export default setTimeGame;