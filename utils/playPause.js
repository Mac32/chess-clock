export default function playPause(contadorPlayer1, contadorPlayer2, setMemoriPlayer1, setMemoriPlayer2, setContadorPlayer1, setContadorPlayer2, memoriPlayer1, memoriPlayer2){

    if(contadorPlayer1 || contadorPlayer2){
  
      setMemoriPlayer1(contadorPlayer1);
      setMemoriPlayer2(contadorPlayer2);
  
      setContadorPlayer1(false);
      setContadorPlayer2(false);
    }else{
      setContadorPlayer1(memoriPlayer1);
      setContadorPlayer2(memoriPlayer2);
    }
  }