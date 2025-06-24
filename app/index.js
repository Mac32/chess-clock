import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

import IconMaterialIcons from '@expo/vector-icons/MaterialIcons';
import ConfigButton from '../components/configButton';
import ModalEditTime from '../components/modalEditTime';
import showConfirmDialog from '../components/showConfirmDialog';
import TimeButton from '../components/timeButton';
import { userConfig } from '../constants/userConfig';
import { TiempoContext } from '../context/timeContext';
import styles from '../styles/styles';
import changeIconPlayPause from '../utils/changeIconPlayPause';
import formatTime from '../utils/formatTime';
import initCounterPlayer1 from '../utils/initCounterPlayer1';
import initCounterPlayer2 from '../utils/initCounterPlayer2';
import playPause from '../utils/playPause';
import reset from '../utils/reset';
import setStyle from '../utils/setStyle';
const audioSource = require('../assets/sounds/click.mp3');

export default function App() {
  const {
    initialTimePlayer1,
    initialTimePlayer2,
    timePlayer1,
    setTimePlayer1,
    timePlayer2,
    setTimePlayer2,
    incrementTime,
    movePlayer1,
    setMovePlayer1,
    movePlayer2,
    setMovePlayer2
  } = useContext(TiempoContext);

  const [stylePlayer1, setStylePlayer1] = useState(styles.inactivo)
  const [stylePlayer2, setStylePlayer2] = useState(styles.inactivo)

  const [contadorPlayer1, setContadorPlayer1] = useState(false);
  const [contadorPlayer2, setContadorPlayer2] = useState(false);

  const [memoriPlayer1, setMemoriPlayer1] = useState(false);
  const [memoriPlayer2, setMemoriPlayer2] = useState(false);

  const [modalPlayer1, setModalPlayer1] = useState(false);
  const [modalPlayer2, setModalPlayer2] = useState(false)

  useEffect(() => {
  }, [movePlayer1, movePlayer2])


  useEffect(() => {
    let intervalId;

    if (contadorPlayer1) {
      intervalId = setInterval(() => {
        setTimePlayer1(prev => prev - 1);
      }, 1000);
    }
    if (contadorPlayer2) {
      intervalId = setInterval(() => {
        setTimePlayer2(prev => prev - 1);
      }, 1000);
    }
    setStyle(contadorPlayer1, contadorPlayer2, timePlayer1, timePlayer2, setStylePlayer1, setStylePlayer2, setMemoriPlayer1, setMemoriPlayer2, setContadorPlayer1, setContadorPlayer2);

    return () => clearInterval(intervalId);

  }, [contadorPlayer1, contadorPlayer2, timePlayer1, timePlayer2]);


  const handleReset = () => {
    reset(
      setMemoriPlayer1,
      setMemoriPlayer2,
      setContadorPlayer1,
      setContadorPlayer2,
      setTimePlayer1,
      setTimePlayer2,
      initialTimePlayer1,
      initialTimePlayer2,
      setMovePlayer1,
      setMovePlayer2
    );
  };

  const handleInitCounterPlayer2 = () => {
    initCounterPlayer2(
      contadorPlayer1,
      contadorPlayer2,
      setContadorPlayer1,
      setContadorPlayer2,
      incrementTime,
      timePlayer1,
      timePlayer2,
      setTimePlayer1,
      audioSource,
      setMovePlayer1);
  }

  const handleInitCounterPlayer1 = () => {
    initCounterPlayer1(
      contadorPlayer1,
      contadorPlayer2,
      setContadorPlayer1,
      setContadorPlayer2,
      incrementTime,
      timePlayer1,
      timePlayer2,
      setTimePlayer2,
      audioSource,
      setMovePlayer2);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/*Modal player 1*/}
      {
        modalPlayer1 ?
          <ModalEditTime
            isVisible={modalPlayer1}
            player={1}
            setModalPlayer={setModalPlayer1}
            time={timePlayer1}
            setTimePlayer={setTimePlayer1}
          />
          : null
      }

      {/*Modal player 2*/}
      {
        modalPlayer2 ?

          <ModalEditTime
            isVisible={modalPlayer2}
            player={2}
            setModalPlayer={setModalPlayer2}
            time={timePlayer2}
            setTimePlayer={setTimePlayer2} />
          : null
      }

      <View style={{ transform: [{ rotate: '180deg' }], width: '100%', backgroundColor: 'red', flex: 1 }}>
        <TimeButton
          title={formatTime(timePlayer1)}
          style={stylePlayer1}
          onPress={handleInitCounterPlayer2}
          initialTime={formatTime(initialTimePlayer1)}
          movePlayer={movePlayer1}
          contadorPlayer1={contadorPlayer1}
          contadorPlayer2={contadorPlayer2}
          setModalPlayer={setModalPlayer1}
        />

      </View>

      <View style={styles.configContainer} >

        <View style={styles.menu}>

          <ConfigButton title='Reset' onPress={() => showConfirmDialog('Desea reiniciar el reloj?', 'Confirme para reiniciar el reloj', handleReset)}>
            <IconMaterialIcons name="restart-alt" size={userConfig.sizes.icons} color={userConfig.colors.grayTerciary} />
          </ConfigButton>
          <ConfigButton title='Play/Pause' onPress={() => playPause(contadorPlayer1, contadorPlayer2, setMemoriPlayer1, setMemoriPlayer2, setContadorPlayer1, setContadorPlayer2, memoriPlayer1, memoriPlayer2)}>
            <IconMaterialIcons name={changeIconPlayPause(contadorPlayer1, contadorPlayer2)} size={userConfig.sizes.icons + 5} color={userConfig.colors.grayTerciary} />
          </ConfigButton>

        </View>

        <View style={styles.menu}>
          <ConfigButton title='Time Edit' onPress={() => {
            router.push('/editTimeScreen');
            setContadorPlayer1(false);
            setContadorPlayer2(false);
          }}>
            <IconMaterialIcons name="edit" size={userConfig.sizes.icons} color={userConfig.colors.grayTerciary} />
          </ConfigButton>
          <ConfigButton title='Sound' onPress={() => { alert('Sound') }}>
            <IconMaterialIcons name="volume-up" size={userConfig.sizes.icons} color={userConfig.colors.grayTerciary} />
          </ConfigButton>

        </View>

      </View>
      <TimeButton
        title={formatTime(timePlayer2)}
        style={stylePlayer2}
        onPress={handleInitCounterPlayer1}
        initialTime={formatTime(initialTimePlayer2)}
        movePlayer={movePlayer2}
        contadorPlayer1={contadorPlayer1}
        contadorPlayer2={contadorPlayer2}
        setModalPlayer={setModalPlayer2} />

    </View>
  );
}