import IconMaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { Text, View } from "react-native";
import ConfigButton from '../components/configButton';
import { userConfig } from '../constants/userConfig';
import styles from '../styles/styles';

export default function NavBarCustomTimeScreen() {
    return (
        <View style={styles.navigationBarEditTime}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                    <ConfigButton title='Back' onPress={() => router.back()}>
                        <IconMaterialIcons name="arrow-back" size={userConfig.sizes.icons} color={userConfig.colors.grayTerciary} />
                    </ConfigButton>
                    <Text style={{ color: userConfig.colors.white, fontSize: userConfig.sizes.font }}>Nuevo Tiempo</Text>
                </View>
            </View>
    )
}