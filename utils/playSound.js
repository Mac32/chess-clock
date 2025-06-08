import { Audio } from 'expo-av';

export default function playSound (audioSource){ 
    async () => {
    const { sound } = await Audio.Sound.createAsync(audioSource);
    await sound.playAsync();
    // Libera recursos después de reproducir
    sound.setOnPlaybackStatusUpdate(status => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  };
}