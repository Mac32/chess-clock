import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import IconMaterialIcons from '@expo/vector-icons/MaterialIcons';
import ConfigButton from '../components/configButton';
import showConfirmDialog from '../components/showConfirmDialog';
import TimeButton from '../components/timeButton';
import styles from '../styles/styles';
import changeIconPlayPause from '../utils/changeIconPlayPause';
import formatTime from '../utils/formatTime';
import getData from '../utils/getData';
import initCounterPlayer1 from '../utils/initCounterPlayer1';
import initCounterPlayer2 from '../utils/initCounterPlayer2';
import playPause from '../utils/playPause';
import reset from '../utils/reset';
import setStyle from '../utils/setStyle';
const audioSource = require('../assets/sounds/click.mp3');

export default function App() {
  const [initialTimePlayer1, setInitialTimePlayer1] = useState();
  const [initialTimePlayer2, setInitialTimePlayer2] = useState();

  const [stylePlayer1, setStylePlayer1] = useState(styles.inactivo)
  const [stylePlayer2, setStylePlayer2] = useState(styles.inactivo)

  const [tiempoPlayer1, setTiempoPlayer1] = useState(initialTimePlayer1);
  const [tiempoPlayer2, setTiempoPlayer2] = useState(initialTimePlayer2);

  const [contadorPlayer1, setContadorPlayer1] = useState(false);
  const [contadorPlayer2, setContadorPlayer2] = useState(false);

  const [memoriPlayer1, setMemoriPlayer1] = useState(false);
  const [memoriPlayer2, setMemoriPlayer2] = useState(false);

  useEffect(() => {
    const initialtime = async () => {
      try {
        const data = await getData('initialTime', 600);
        setTiempoPlayer1(parseInt(data));
        setTiempoPlayer2(parseInt(data));
        setInitialTimePlayer1(parseInt(data));
        setInitialTimePlayer2(parseInt(data));
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
    initialtime();
  }, []);

  useEffect(() => {
    let intervalId;

    if (contadorPlayer1) {
      intervalId = setInterval(() => {
        setTiempoPlayer1(prev => prev - 1);
      }, 1000);
    }
    if (contadorPlayer2) {
      intervalId = setInterval(() => {
        setTiempoPlayer2(prev => prev - 1);
      }, 1000);
    }
    setStyle(contadorPlayer1, contadorPlayer2, tiempoPlayer1, tiempoPlayer2, setStylePlayer1, setStylePlayer2, setMemoriPlayer1, setMemoriPlayer2, setContadorPlayer1, setContadorPlayer2);

    return () => clearInterval(intervalId);

  }, [contadorPlayer1, contadorPlayer2, tiempoPlayer1, tiempoPlayer2]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <TimeButton title={formatTime(tiempoPlayer1)} style={stylePlayer1} onPress={() => initCounterPlayer2(contadorPlayer1, contadorPlayer2, setContadorPlayer1, setContadorPlayer2, audioSource)} />

      <View style={styles.configContainer} >

        <View style={styles.menu}>

          <ConfigButton
            title='Reset'
            onPress={() =>
              showConfirmDialog(
                'Desea reiniciar el reloj?',
                'Confirme para reiniciar el reloj',
                () => reset(
                  setMemoriPlayer1,
                  setMemoriPlayer2,
                  setContadorPlayer1,
                  setContadorPlayer2,
                  setTiempoPlayer1,
                  setTiempoPlayer2,
                  initialTimePlayer1,
                  initialTimePlayer2
                )
              )
            }
          >

            <IconMaterialIcons name="restart-alt" size={sizeIcons} color={colorIcons} />
          </ConfigButton>
          <ConfigButton title='Play/Pause' onPress={() => playPause(contadorPlayer1, contadorPlayer2, setMemoriPlayer1, setMemoriPlayer2, setContadorPlayer1, setContadorPlayer2, memoriPlayer1, memoriPlayer2)}>
            <IconMaterialIcons name={changeIconPlayPause(contadorPlayer1, contadorPlayer2)} size={sizeIcons + 5} color={colorIcons} />
          </ConfigButton>

        </View>

        <View style={styles.menu}>

          <ConfigButton title='Time Edit' onPress={() => router.push('/editTimeScreen')}>
            <IconMaterialIcons name="edit" size={sizeIcons} color={colorIcons} />
          </ConfigButton>
          <ConfigButton title='Sound' onPress={() => { alert('Sound') }}>
            <IconMaterialIcons name="volume-up" size={sizeIcons} color={colorIcons} />
          </ConfigButton>

        </View>

      </View>
      <TimeButton title={formatTime(tiempoPlayer2)} style={stylePlayer2} onPress={() => initCounterPlayer1(contadorPlayer1, contadorPlayer2, setContadorPlayer1, setContadorPlayer2, audioSource)} />


    </View>
  );
}

const colorIcons = '#8b8c82';
const sizeIcons = 30;