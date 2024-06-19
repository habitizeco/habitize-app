import { StyleSheet, View, Image, Pressable, Text } from 'react-native';

import { styles } from './styles';

export const HabitsBanner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weekly reward</Text>
            <Text style={styles.amount}>$10</Text>
            <Text style={styles.timer}>5d 21h left</Text>
            <Text style={styles.description}>Weekly reward</Text>
        </View>
    );
}
