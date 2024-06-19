import { StyleSheet, Pressable, Text } from 'react-native';

interface Props {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<Props> = ({ title, onPress, disabled = false }) => {

    return (
        <Pressable
            style={[styles.button, disabled && styles.buttonDisabled]}
            onPress={!disabled ? onPress : undefined}
        >
            <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#075AFE',
        padding: 15,
        width: '100%',
        marginBottom: 20,
    },
    buttonDisabled: {
        backgroundColor: '#d3d3d3',
    },
    text: {
        fontSize: 18,
        letterSpacing: 0.50,
        fontWeight: 'bold',
        color: 'white',
    },
    textDisabled: {
        color: '#a1a1a1',
    }
});