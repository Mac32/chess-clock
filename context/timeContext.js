import { createContext, useEffect, useState } from 'react';
import dataPresets from '../constants/dataPresets';
import getData from '../utils/getData';

export const TiempoContext = createContext();

export function TiempoProvider({ children }) {
    const [dataPresetsState, setDataPresetsState] = useState();

    const [initialTimePlayer1, setInitialTimePlayer1] = useState();
    const [initialTimePlayer2, setInitialTimePlayer2] = useState();

    const [timePlayer1, setTimePlayer1] = useState(initialTimePlayer1);
    const [timePlayer2, setTimePlayer2] = useState(initialTimePlayer2);


    useEffect(() => {

        const data = async () => {
            getData('dataPresets', dataPresets).then(data => setDataPresetsState(JSON.parse(data)));
        }
        data();

        const initialtime = async () => {
            try {

                const data = await getData('initialTime', 600);
                setTimePlayer1(parseInt(data));
                setTimePlayer2(parseInt(data));
                setInitialTimePlayer1(parseInt(data));
                setInitialTimePlayer2(parseInt(data));
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }
        initialtime();
    }, []);

    return (
        <TiempoContext.Provider value={{
            dataPresetsState, 
            setDataPresetsState,
            initialTimePlayer1,
            setInitialTimePlayer1,
            initialTimePlayer2,
            setInitialTimePlayer2,
            timePlayer1,
            setTimePlayer1,
            timePlayer2,
            setTimePlayer2
        }}>
            {children}
        </TiempoContext.Provider>
    );
}
