
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';

export const RewardsBoard = () => {
    const participants = [
        { name: 'Alex', points: 10000 },
        { name: 'Pablo', points: 9500 },
        { name: 'Alvi', points: 5000 },
        { name: 'John', points: 3000 },
        { name: 'Tereza', points: 1500 },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Participants</Text>
            <View style={styles.list}>
                {participants.map((participant, index) => (
                    <View key={index} style={styles.item}>
                        <View style={styles.user}>
                            <Text style={styles.position}>{index + 1}</Text>
                            <Text style={styles.avatar}>x</Text>
                            <Text style={styles.name}>{participant.name}</Text>
                        </View>
                        <View style={styles.points}>
                            <Text style={styles.amount}>{participant.points}</Text>
                            <Text style={styles.icon}>x</Text>
                        </View>
                    </View>
                ))}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#d4d4d4',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        marginBottom: 20,
    },
    list: {
        width: '100%',
        gap: 10,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#d4d4d4',
        borderWidth: 1,
        padding: 10,

    },
    user: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    position: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatar: {

    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    points: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {

    }
});
