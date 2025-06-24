// components/TwoPointsSeparation.jsx
import { Text } from 'react-native';

export default function TwoPointsSeparation({
    color = '#8b8c82',
    fontSize = 30,
    marginBottom = 20 }) {
    return (
        <Text style={{ color, fontSize, marginBottom }}>:</Text>
    );
};

