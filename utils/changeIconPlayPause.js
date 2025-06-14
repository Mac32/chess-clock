export default function changeIconPlayPause(contadorPlayer1, contadorPlayer2) {
    if(contadorPlayer1 || contadorPlayer2){
        return 'pause'
    }else{
        return 'play-arrow'
    }
}