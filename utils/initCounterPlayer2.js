import playSound from "./playSound";

export default function initCounterPlayer2(contadorPlayer1, contadorPlayer2, setContadorPlayer1, setContadorPlayer2, audioSource) {

      if(!contadorPlayer2 && !contadorPlayer1){
        setContadorPlayer2(true);
        playSound(audioSource);
      }else if(contadorPlayer1){
        setContadorPlayer1(false);
        setContadorPlayer2(true);
        playSound(audioSource);
    }
}