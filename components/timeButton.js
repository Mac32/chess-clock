// components/CustomButton.js
import Entypo from '@expo/vector-icons/Entypo';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function TimeButton({
  title,
  onPress,
  style,
  textStyle,
  textColor = '#fff',
  initialTime,
  movePlayer,
  contadorPlayer1,
  contadorPlayer2
}) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '90%' }}>
        <Text style={[styles.textMovimiento, textStyle, { color: textColor }]}>Moves: {movePlayer}</Text>

      </View>
      <Text style={[styles.text, textStyle, { color: textColor }]}>{title}</Text>

      {!contadorPlayer1 && !contadorPlayer2 ? (
        <View style={{ width: '90%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Pressable onPress={() => alert('hola')}>
            <Entypo name="sound-mix" size={40} color={textColor} />
          </Pressable>
          <Text style={[styles.textInitialTime, textStyle, { color: textColor }]}>
            {initialTime}
          </Text>
        </View>
      ) : <View style={{ width: '90%', height: 73, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}></View>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 50,
    width: '100%',
    height: '45%'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 100,
    textAlignVertical: 'center',
    textAlign: 'middle',
  },
  textMovimiento: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlignVertical: 'center',
    textAlign: 'middle',
  },
  textInitialTime: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'middle',
    marginTop: 5
  }

});