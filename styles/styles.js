import { StyleSheet } from "react-native";
import { userConfig } from "../constants/userConfig";

const colors = userConfig.colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    backgroundColor: colors.grayPrimary
  },
  configContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.grayPrimary,
    width: '100%'
  },
  activo: {
    backgroundColor: colors.greenPrimery
  },
  inactivo: {
    backgroundColor: colors.grayTerciary
  },
  lose: {
    backgroundColor: colors.redPrimary
  },
  navigationBarEditTime: {
    backgroundColor: colors.grayPrimary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: colors.white,
    fontSize: 20
  },
  buttonCreateNewTime: {
    color: colors.white,
    fontSize: 20,
    backgroundColor: colors.greenPrimery,
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginVertical: 20,
    fontWeight: 'bold'
  },
  textPresets: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '300',
    marginVertical: 10,
    fontStyle: "italic",
    borderBottomColor: colors.white,
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
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    minWidth: '85%',
    paddingVertical: 12,
    elevation: 3,
    backgroundColor: colors.greenPrimery,
    marginBottom: 50,
    color: colors.white,
    fontSize: userConfig.sizes.fontBig,
    fontWeight: 'bold'
  }

});
export default styles;