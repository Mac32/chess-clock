import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { userConfig } from '../constants/userConfig';
import convertTimeToSeconds from '../utils/convertTimeToSeconds';
import ButtonModal from './buttonModal';
import NumberField from './numberField';
import TwoPointsSeparation from './twoPointsSeparation';


export default function ModalEditTime({ isVisible, player, setModalPlayer, time, setTimePlayer }) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const mins = Math.floor(time / 60).toString().padStart(2, '0');
    const secs = (time % 60).toString().padStart(2, '0');

    const [newHours, setNewHours] = useState(hours);
    const [newMins, setNewMins] = useState(mins);
    const [newSeconds, setNewSeconds] = useState(secs);

    const handlerGuardar = () => {
        setTimePlayer(convertTimeToSeconds(newMins, newSeconds))
        setModalPlayer(false)
    }

    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={isVisible}>
                <View style={player == 1 ? styles.overlayInvert : styles.overlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.titleContainer}>
                            <MaterialIcons name="timer" size={24} color={userConfig.colors.grayTerciary} />
                            <Text style={styles.title}>Ajustar Tiempo</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', }}>
                            <NumberField title='Horas' value={newHours} setValue={setNewHours} />
                            <TwoPointsSeparation />
                            <NumberField title='Minutos' value={newMins} setValue={setNewMins} />
                            <TwoPointsSeparation />
                            <NumberField title='Segundos' value={newSeconds} setValue={setNewSeconds} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <ButtonModal title='Guardar' actionPress={handlerGuardar} />
                            <ButtonModal title='Cancelar' actionPress={() => { setModalPlayer(false) }} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        height: '16%',
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        color: userConfig.colors.grayTerciary,
        fontSize: 16,
        marginLeft: 10,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // oscurece el fondo
    },
    overlayInvert: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // oscurece el fondo
        transform: [{ rotate: '180deg' }],
    },
    modalContent: {
        minHeight: 250,
        width: '90%',
        backgroundColor: userConfig.colors.graySecundary,
        borderRadius: 5,
        padding: 20,
        justifyContent: 'space-between',
        flexShrink: 0
    }

});
