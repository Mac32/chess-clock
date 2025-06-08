import playSound from "./playSound";

export default function initCounterPlayer1 (contadorPlayer1, contadorPlayer2, setContadorPlayer1, setContadorPlayer2, audioSource){
    
    if(!contadorPlayer2 && !contadorPlayer1){
      setContadorPlayer1(true);
      playSound(audioSource);
    }else if(contadorPlayer2){
      setContadorPlayer2(false);
      setContadorPlayer1(true);
      playSound(audioSource);
    }
  
}