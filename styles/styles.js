import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menu:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '50%'
    },
    configContainer: {
      height: '10%', 
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center', 
      backgroundColor: '#322e2b',
      width: '100%'
    },
    activo: {
      backgroundColor: '#7ca453'
    },
    inactivo: {
      backgroundColor: '#8b8c82'
    },
    lose: {
      backgroundColor: '#F22D1B'
    }
    
  });
  export default styles;