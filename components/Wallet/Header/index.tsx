
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';

import { styles } from './styles';

export const WalletHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your balance</Text>
            <Text style={styles.amount}>$10</Text>
            <Text style={styles.timer}>Reach $10 to withdraw your money</Text>
        </View>
    );
}

