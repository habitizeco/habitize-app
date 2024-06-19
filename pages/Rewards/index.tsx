
import { StyleSheet, View } from 'react-native';

import { RewardsHeader } from '@/components/Rewards/Header';
import { RewardsBoard } from '@/components/Rewards/Board';
import { RewardsParticipate } from '@/components/Rewards/Participate';

export default function RewardsPage() {
    return (
        <>
            <View style={styles.container}>
                <RewardsHeader />
                <RewardsBoard />
                <RewardsParticipate />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginHorizontal: 20,
        display: 'flex',
        gap: 20,
    }
});
