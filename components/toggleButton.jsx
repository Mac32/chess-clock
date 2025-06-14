import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import OnlyOneActiveCheckbox from "../utils/onlyOneActiveCheckbox";

export default function ToggleButton({ isActive, item, dataPresetsState, setDataPresetsState, index}) {
    return (
        <View>
            <BouncyCheckbox
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