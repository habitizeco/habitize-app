
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';

export const RewardsHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weekly reward</Text>
            <Text style={styles.amount}>$10</Text>
            <Text style={styles.timer}>5d 21h left</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
        display: 'flex',
        gap: 2,
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
    },
    amount: {
        fontSize: 64,
        fontWeight: 'bold',
    },
    timer: {

    }
});
