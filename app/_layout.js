import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui'; // 👈 importar esto
import { useEffect } from 'react';
import { TiempoProvider } from '../context/timeContext';

export default function RootLayout() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync('transparent'); // para ocultar fondo del sistema
  }, []);

  return (
    <TiempoProvider>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }} />
    </TiempoProvider>
  );
}
