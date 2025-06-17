import IconMaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useContext, useEffect } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import ConfigButton from '../components/configButton';
import ToggleButton from '../components/toggleButton';
import { userConfig } from '../constants/userConfig';
import { TiempoContext } from '../context/timeContext';
import styles from '../styles/styles';
import setTimeGame from '../utils/setTimeGame';

export default function EditTimeScreen() {

  const {
    dataPresetsState,
    setDataPresetsState,
    setInitialTimePlayer1,
    setInitialTimePlayer2,
    setTimePlayer1,
    setTimePlayer2,
    setIncrementTime,
    setMovePlayer1,
    setMovePlayer2
  } = useContext(TiempoContext);

  useEffect(() => {
  }, [dataPresetsState])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#322e2a' }}>

      <View style={styles.navigationBarEditTime}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ConfigButton title='Back' onPress={() => router.back()}>
            <IconMaterialIcons name="arrow-back" size={userConfig.sizeIcons} color={userConfig.colorIcons} />
          </ConfigButton>
          <Text style={{ color: userConfig.textColor, fontSize: 20 }}>Time Controlls</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <ConfigButton title='Time Edit' onPress={() => alert('edit')}>
            <IconMaterialIcons name="edit" size={userConfig.sizeIcons} color={userConfig.colorIcons} />
          </ConfigButton>

          <ConfigButton title='settings' onPress={() => alert('settings')}>
            <IconMaterialIcons name="settings" size={userConfig.sizeIcons} color={userConfig.colorIcons} />
          </ConfigButton>
        </View>
      </View>

      <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <Pressable title='Crear nuevo tiempo' onPress={() => alert('Crear nuevo tiempo')}>
          <Text style={styles.buttonCreateNewTime}>Crear nuevo tiempo</Text>
        </Pressable>
        <View>
          <Text style={styles.textPresets}>Presets:</Text>
        </View>
      </View>
      <FlatList
        data={dataPresetsState}
        renderItem={({ item, index }) =>
          <View style={styles.presetTime}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.text}>{item.time} min</Text>
              {item.add !== 0 && <Text style={styles.text}> | {item.add} sec</Text>}
            </View>
            <ToggleButton isActive={item.select} index={index} dataPresetsState={dataPresetsState} setDataPresetsState={setDataPresetsState} />
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <View>
        <Pressable title='Iniciar' onPress={() => setTimeGame(dataPresetsState, setInitialTimePlayer1, setInitialTimePlayer2, setTimePlayer1, setTimePlayer2, setIncrementTime, setMovePlayer1, setMovePlayer2)}>
          <Text style={styles.buttonIniciar} >Iniciar</Text>
        </Pressable>
      </View>
    </View>
  );
}