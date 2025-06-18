import playSound from "./playSound";

export default function initCounterPlayer1(contadorPlayer1, contadorPlayer2, setContadorPlayer1, setContadorPlayer2, incrementTime, timePlayer1, timePlayer2, setTimePlayer2, audioSource, setMovePlayer2) {

  if (!contadorPlayer2 && !contadorPlayer1 && timePlayer1 > 0 && timePlayer2 > 0) {
    setContadorPlayer1(true);
    playSound(audioSource);
  } else if (contadorPlayer2) {
    setTimePlayer2(timePlayer2 + incrementTime);
    setMovePlayer2(prev => prev + 1)
    setContadorPlayer2(false);
    setContadorPlayer1(true);
    playSound(audioSource);
  }

}