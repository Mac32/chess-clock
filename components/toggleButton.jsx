import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { userConfig } from "../constants/userConfig";
import OnlyOneActiveCheckbox from "../utils/onlyOneActiveCheckbox";

export default function ToggleButton({ isActive, dataPresetsState, setDataPresetsState, index }) {
    return (
        <View>
            <BouncyCheckbox
                size={25}
                fillColor= {userConfig.themColor}
                unFillColor="#322e2a"
                innerIconStyle={{ borderWidth: 2 }}
                bounceEffect={1}
                onPress={() => {
                    OnlyOneActiveCheckbox(dataPresetsState, setDataPresetsState, index);
                }
                }
                isChecked={isActive}
                size={20} />
        </View>
    )
}