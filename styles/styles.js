import { StyleSheet } from "react-native";
import { userConfig } from "../constants/userConfig";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    backgroundColor: '#322e2a'
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
    backgroundColor: userConfig.themColor
  },
  inactivo: {
    backgroundColor: '#8b8c82'
  },
  lose: {
    backgroundColor: '#F22D1B'
  },
  navigationBarEditTime: {
    backgroundColor: '#524f4f',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  buttonCreateNewTime: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: userConfig.themColor,
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginVertical: 20,
    fontWeight: 'bold'
  },
  textPresets: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
    marginVertical: 10,
    fontStyle: "italic",
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingBottom: 2,
    width: '90',
    textAlign: 'center'
  },
  presetTime: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 15,
    marginVertical: 9
  },
  buttonIniciar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 145,
    padding: 10,
    elevation: 3,
    backgroundColor: '#7ca453',
    marginBottom: 50,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }

});
export default styles;