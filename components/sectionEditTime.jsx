import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NumberFieldCustomTime from "../components/numberFieldCustomTime";
import TwoPointsSeparation from "../components/twoPointsSeparation";
import { userConfig } from "../constants/userConfig";

export default function SectionEditTime({ title, setTime }) {

    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        setTime(min * 60 + sec * 1);

    }, [min, sec])

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>

            <Text style={{ color: userConfig.colors.white, width: '70%', fontSize: userConfig.sizes.font }}>{title}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'flex-end', width: '30%', justifyContent: 'space-around' }}>
                <NumberFieldCustomTime value={min} setValue={setMin} />
                <TwoPointsSeparation fontSize={userConfig.sizes.font} marginBottom={10} />
                <NumberFieldCustomTime value={sec} setValue={setSec} />
            </View>

        </View>
    )
}