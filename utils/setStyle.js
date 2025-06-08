import styles from "../styles/styles";

export default function setStyle(contadorPlayer1, contadorPlayer2, tiempoPlayer1, tiempoPlayer2, setStylePlayer1, setStylePlayer2, setMemoriPlayer1, setMemoriPlayer2, setContadorPlayer1, setContadorPlayer2){
  
    if(contadorPlayer1){
      setStylePlayer1(styles.activo);
    }else{
      setStylePlayer1(styles.inactivo);
    }
    
    if(contadorPlayer2){
      setStylePlayer2(styles.activo);
    }else{
      setStylePlayer2(styles.inactivo);
    }
  
    if(tiempoPlayer1 == 0){
      setMemoriPlayer1(false);
      setMemoriPlayer2(false);
      setContadorPlayer1(false);
      setContadorPlayer2(false);
      setStylePlayer1(styles.lose);
      setStylePlayer2(styles.activo);
    }
    
    if(tiempoPlayer2 == 0){
      setMemoriPlayer1(false);
      setMemoriPlayer2(false);
      setContadorPlayer1(false);
      setContadorPlayer2(false);
      setStylePlayer2(styles.lose);
      setStylePlayer1(styles.activo);
    }
  
  }