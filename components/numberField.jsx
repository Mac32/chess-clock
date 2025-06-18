import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { userConfig } from "../constants/userConfig";

export default function NumberField({ title, value, setValue }) {

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
                placeholderTextColor={userConfig.colors.textColorPrimary}
                maxLength={2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChangeText={(text) => handlerChange(text)}
            />
            <Text style={{ color: userConfig.colors.grayTerciary, marginTop: 5
             }}>{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        borderColor: userConfig.colors.grayTerciary, 
        borderWidth: 1, 
        padding: 5, 
        color: userConfig.colors.white, 
        fontSize: 40, 
        textAlign: 'center', 
        width: 80, 
        height: 80, 
        borderRadius: 5, 
        backgroundColor: userConfig.colors.grayTerciary
    },
    textInputFocus: {
        borderRadius: 5, 
        height: 40, 
        borderColor: userConfig.colors.greenPrimery, 
        borderWidth: 1, 
        padding: 5, 
        color: userConfig.colors.white, 
        fontSize: 40, 
        textAlign: 'center', 
        width: 80, 
        height: 80, 
        backgroundColor: userConfig.colors.greenPrimery
    }
});