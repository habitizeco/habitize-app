import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: (Dimensions.get('window').width / 2) - 30,
        height: (Dimensions.get('window').width / 2) - 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: '#d4d4d4',
        borderWidth: 1,
        gap: 6,
        overflow: 'hidden',
    },
    buttonTracked: {
        borderColor: '#000',
        backgroundColor: '#000',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textTracked: {
        color: 'white',
    },
    streak: {
        flexDirection: 'row',
        gap: 6,
    },
    streakAmount: {
        fontSize: 14,
    },
    streakIcon: {
        fontSize: 14,
    },
    circle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 25,
        backgroundColor: 'black',
        opacity: 0.5,
    }
});

export default styles;
