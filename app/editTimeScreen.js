import IconMaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import ConfigButton from '../components/configButton';
import ToggleButton from '../components/toggleButton';
import dataPresets from '../constants/dataPresets';
import styles from '../styles/styles';
import getData from '../utils/getData';

const colorIcons = '#8b8c82';
const sizeIcons = 35;

export default function EditTimeScreen() {

  const [dataPresetsState, setDataPresetsState] = useState();

  useEffect(
    () => {

      const data = async () => {
        getData('dataPresets', dataPresets).then(data => setDataPresetsState(JSON.parse(data)));
      }
      data();

    },[])

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
            <ToggleButton isActive={item.select} item={item} index={index} dataPresetsState={dataPresetsState} setDataPresetsState={setDataPresetsState} />
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <View>
        <Pressable title='Iniciar' onPress={() => alert('tiempo Iniciado')}>
          <Text>Iniciar</Text>
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
});