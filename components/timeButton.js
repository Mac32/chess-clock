// components/CustomButton.js
import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

export default function TimeButton({
  title,
  onPress,
  style,
  textStyle,
  textColor = '#fff',
}) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '45%'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 70,
    textAlignVertical: 'center',
    textAlign: 'middle',
  },
});