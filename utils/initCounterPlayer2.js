import playSound from "./playSound";

export default function initCounterPlayer2(contadorPlayer1, contadorPlayer2, setContadorPlayer1, setContadorPlayer2, incrementTime, timePlayer1, timePlayer2, setTimePlayer1, audioSource) {

  if (!contadorPlayer2 && !contadorPlayer1  && timePlayer1 > 0 && timePlayer2 > 0) {
    setContadorPlayer2(true);
    playSound(audioSource);
  } else if (contadorPlayer1) {
    setTimePlayer1(timePlayer1 + incrementTime);
    setContadorPlayer1(false);
    setContadorPlayer2(true);
    playSound(audioSource);
  }
}