import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    grid: {
        gap: 20,
    },
    card: {
        flex: 1,
        borderRadius: 25,
        backgroundColor: 'white',
        padding: 20,
        gap: 5,
        borderColor: '#d4d4d4',
        borderWidth: 1,
        minHeight: 75,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'thin',
        textTransform: 'uppercase',
        color: '#999',
    },
    cardContent: {
        fontSize: 42,
        fontWeight: 'bold',
    },
    twoColumns: {
        flexDirection: 'row',
        gap: 20,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 20,
    },
    hint: {
        alignSelf: 'center',
    }
});