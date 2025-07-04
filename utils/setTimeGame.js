import { router } from 'expo-router';
import updateData from './updateData';

const setTimeGame = async (dataPresets, setInitialTimePlayer1, setInitialTimePlayer2, setTimePlayer1, setTimePlayer2, setIncrementTime, setMovePlayer1, setMovePlayer2) => {
  
  let initial = 0
  let increment = 0
  dataPresets.map((preset, i) => {
    if (preset.select) {
      initial = parseInt(preset.time)
      increment = parseInt(preset.add)
    }
  });
  const update = async () => {
    try {

      await updateData(dataPresets, initial, increment);
      setInitialTimePlayer1(initial);
      setInitialTimePlayer2(initial);
      setTimePlayer1(initial);
      setTimePlayer2(initial);
      setIncrementTime(increment);
      setMovePlayer1(0);
      setMovePlayer2(0);
    } catch (e) {
      console.log('ocurrio un error al setiar en setTimeGame: ' + e)
    }
  }
  update()
  router.back()
};

export default setTimeGame;