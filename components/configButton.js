import React from "react";
import { Pressable, StyleSheet } from 'react-native';

export default function ConfigButton({
  onPress,
  children,
}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {children}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});