import { Alert } from "react-native";

const showConfirmDialog = (title, message, action) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Aceptar",
          onPress: () => {
            if (typeof action === 'function') {
              action();
            } else {
              console.warn("action no es una función");
            }
          }
        }
      ]
    );
  };

  export default showConfirmDialog;