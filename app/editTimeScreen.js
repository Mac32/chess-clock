import IconMaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext, useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import ConfigButton from '../components/configButton';
import ToggleButton from '../components/toggleButton';
import { TiempoContext } from '../context/timeContext';
import styles from '../styles/styles';
import setTimeGame from '../utils/setTimeGame';

const colorIcons = '#8b8c82';
const sizeIcons = 45;

export default function EditTimeScreen() {

  const [] = useState();
  const {
    dataPresetsState, 
    setDataPresetsState, 
    setInitialTimePlayer1, 
    setInitialTimePlayer2,
    setTimePlayer1,
    setTimePlayer2 
  } = useContext(TiempoContext);

  useEffect(() => {
  }, [dataPresetsState])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={styles.navigationBarEditTime}>
        <Text>Time Controlls</Text>
        <View style={{ flexDirection: 'row' }}>
          <ConfigButton title='Time Edit' onPress={() => alert('edit')}>
            <IconMaterialIcons name="edit" size={sizeIcons} color={colorIcons} />
          </ConfigButton>

          <ConfigButton title='settings' onPress={() => alert('settings')}>
            <IconMaterialIcons name="settings" size={sizeIcons} color={colorIcons} />
          </ConfigButton>
        </View>
      </View>

      <View>
        <Pressable title='Crear nuevo tiempo' onPress={() => alert('Crear nuevo tiempo')}>
          <Text>Crear nuevo tiempo</Text>
        </Pressable>
        <Text>Presets</Text>
      </View>
      <FlatList
        data={dataPresetsState}
        renderItem={({ item, index }) =>
          <View style={stylesEditTime.container}>
            <Text>{item.time} min</Text>
            {item.add !== 0 && <Text> | {item.add} sec</Text>}
            <ToggleButton isActive={item.select} index={index} dataPresetsState={dataPresetsState} setDataPresetsState={setDataPresetsState} />
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <View>
        <Pressable title='Iniciar' onPress={() => setTimeGame(dataPresetsState, setInitialTimePlayer1, setInitialTimePlayer2, setTimePlayer1, setTimePlayer2)}>
          <Text style={stylesEditTime.button} >Iniciar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const stylesEditTime = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 145,
    padding: 10,
    elevation: 3,
    backgroundColor: '#7ca453',
    marginBottom: 50,
    color: '#fff',
    fontSize: 20
  }
});