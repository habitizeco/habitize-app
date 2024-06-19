

import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';

import { HabitsHeader } from '@/components/Habits/Header';
import { HabitsBanner } from '@/components/Habits/Banner';
import { HabitsGrid } from '@/components/Habits/Grid';

export default function HabitsPage() {
    return (
        <>
            <View style={styles.container}>
                <HabitsHeader />
                <HabitsBanner />
                <HabitsGrid />
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
