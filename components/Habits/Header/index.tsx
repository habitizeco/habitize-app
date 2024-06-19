import { useContext } from 'react';

import { StyleSheet, View, Image, Pressable, Text } from 'react-native';

import { WalletContext } from '@/contexts/Wallet/Context';

export const HabitsHeader = () => {
    const { wallet } = useContext(WalletContext);

    return (
        <View style={styles.container}>
            <View style={styles.user_container}>
                <Pressable>
                    <Image
                        style={styles.user_avatar}
                        source={{ uri: 'https://picsum.photos/200/300' }} />
                    <Text style={styles.user_name}>John Doe</Text>
                </Pressable>
            </View>
            <View style={styles.wallet}>
                <View>
                    <Image
                        style={styles.points_icon}
                        source={{ uri: 'https://picsum.photos/200/300' }} />
                    <Text style={styles.points_value}>{wallet.cents}</Text>
                </View>
                <View>
                    <Image
                        style={styles.points_icon}
                        source={{ uri: 'https://picsum.photos/200/300' }} />
                    <Text style={styles.points_value}>{wallet.tickets}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#d4d4d4',
        borderWidth: 1,
        borderRadius: 25,
        height: 50,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    user_container: {

    },
    user_avatar: {

    },
    user_name: {

    },
    wallet: {
        flexDirection: 'row',
        gap: 10,
    },
    points_icon: {

    },
    points_value: {

    }
});
