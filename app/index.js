import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View
 } from 'react-native';

 import IconMaterialIcons from '@expo/vector-icons/MaterialIcons';

import TimeButton from '../components/timeButton';
import ConfigButton from '../components/configButton';

export default function App() {

  let initialTimePlayer1 = 300;
  let initialTimePlayer2 = 300;

  const [stylePlayer1, setStylePlayer1] = useState(styles.inactivo)
  const [stylePlayer2, setStylePlayer2] = useState(styles.inactivo)

  const [tiempoPlayer1, setTiempoPlayer1] = useState(initialTimePlayer1);
  const [tiempoPlayer2, setTiempoPlayer2] = useState(initialTimePlayer2);

  const [contadorPlayer1, setContadorPlayer1] = useState(false);
  const [contadorPlayer2, setContadorPlayer2] = useState(false);

  const [memoriPlayer1, setMemoriPlayer1] = useState(false);
  const [memoriPlayer2, setMemoriPlayer2] = useState(false);

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
  setStyle();

  return () => clearInterval(intervalId);

  }, [contadorPlayer1, contadorPlayer2]);

  const initCounterPlayer1 = () => {
    if(!contadorPlayer2 && !contadorPlayer1){
      setContadorPlayer1(true);
    }else if(contadorPlayer2){
      setContadorPlayer2(false);
      setContadorPlayer1(true);
    }
  }

  const initCounterPlayer2 = () => {
    if(!contadorPlayer2 && !contadorPlayer1){
      setContadorPlayer2(true);
    }else if(contadorPlayer1){
      setContadorPlayer1(false);
      setContadorPlayer2(true);
  }
}

const playPause = () => {

  if(contadorPlayer1 || contadorPlayer2){

    setMemoriPlayer1(contadorPlayer1);
    setMemoriPlayer2(contadorPlayer2);

    setContadorPlayer1(false);
    setContadorPlayer2(false);
  }else{
    setContadorPlayer1(memoriPlayer1);
    setContadorPlayer2(memoriPlayer2);
  }
}

const reset = () => {
  setMemoriPlayer1(false);
  setMemoriPlayer2(false);
  setContadorPlayer1(false);
  setContadorPlayer2(false);
  setTiempoPlayer1(initialTimePlayer1);
  setTiempoPlayer2(initialTimePlayer2);
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

const setStyle = () => {
  if(tiempoPlayer1 == 0){
    playPause();
    setStylePlayer1(styles.lose);
  }
  
  if(tiempoPlayer2 == 0){
    playPause();
    setStylePlayer2(styles.lose);
  }

  if(contadorPlayer1){
    setStylePlayer1(styles.activo);
  }else{
    setStylePlayer1(styles.inactivo);
  }
  
  if(contadorPlayer2){
    setStylePlayer2(styles.activo);
  }else{
    setStylePlayer2(styles.inactivo);
  }
}


  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <TimeButton title={formatTime(tiempoPlayer1)} style={stylePlayer1} onPress={initCounterPlayer2} />
        
        <View style={styles.configContainer} >
        
        <View style={styles.menu}>

          <ConfigButton title='Reset' onPress={reset}>
            <IconMaterialIcons name="restart-alt" size={sizeIcons} color={colorIcons} />
          </ConfigButton>
          <ConfigButton title='Play/Pause' onPress={playPause}>
            <IconMaterialIcons name="play-arrow" size={sizeIcons} color={colorIcons} />
          </ConfigButton>

        </View>

        <View style={styles.menu}>

          <ConfigButton title='Time Edit' onPress={()=> {alert('Time Edit')}}>
            <IconMaterialIcons name="edit" size={sizeIcons} color={colorIcons} />
          </ConfigButton>
          <ConfigButton title='Sound' onPress={()=> {alert('Sound')}}>
            <IconMaterialIcons name="volume-up" size={sizeIcons} color={colorIcons} />
          </ConfigButton>

        </View>

        </View>
      <TimeButton title={formatTime(tiempoPlayer2)} style={stylePlayer2} onPress={initCounterPlayer1} />


    </View>
  );
}

const colorIcons= '#8b8c82';
const sizeIcons= 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%'
  },
  configContainer: {
    height: '10%', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
    backgroundColor: '#322e2b',
    width: '100%'
  },
  activo: {
    backgroundColor: '#7ca453'
  },
  inactivo: {
    backgroundColor: '#8b8c82'
  },
  lose: {
    backgroundColor: '#red'
  }
  
});
