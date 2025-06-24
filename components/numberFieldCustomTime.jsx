import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { userConfig } from "../constants/userConfig";

export default function NumberFieldCustomTime({ value = '00', setValue }) {

    const [isFocus, setIsFocus] = useState(false)

    const handlerChange = (valueText) => {
        const parsedValue = Number.parseInt(valueText, 10);

        if (isNaN(parsedValue) || parsedValue <= 60) {
            setValue(valueText);
        } else {
            setValue('60');
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={isFocus ? styles.textInputFocus: styles.textInput}
                selectTextOnFocus={true}
                keyboardType="numeric"
                value={value}
                editable={true}
                placeholder='00'
                placeholderTextColor={userConfig.colors.grayTerciary}
                maxLength={2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChangeText={(text) => handlerChange(text)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        width: 40,
        borderRadius: 5, 
        borderColor: userConfig.colors.grayPrimary, 
        borderWidth: 1, 
        padding: 5, 
        color: userConfig.colors.grayTerciary, 
        fontSize:   userConfig.sizes.font, 
        textAlign: 'center', 
        backgroundColor: userConfig.colors.grayPrimary
    },
    textInputFocus: {
        height: 40, 
        width: 40, 
        borderRadius: 5, 
        borderColor: userConfig.colors.greenPrimery, 
        borderWidth: 1, 
        padding: 5, 
        color: userConfig.colors.white, 
        fontSize: userConfig.sizes.font, 
        textAlign: 'center', 
    }
});