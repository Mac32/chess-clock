import { Pressable, Text } from "react-native";
import { userConfig } from "../constants/userConfig";

export default function ButtonModal({title, actionPress}) {
    return (
        <Pressable onPress={actionPress} style={{padding: 15, marginVertical: 20}} >
            <Text style={{ color: userConfig.colors.grayTerciary, fontSize: userConfig.sizes.font}}>{title}</Text>
        </Pressable>
    )
}