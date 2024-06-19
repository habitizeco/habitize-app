import { useContext } from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';

import { HabitsContext } from '@/contexts/Habits/Context'
import { HabitsGridButton } from '@/components/Habits/Grid/Button';

export const HabitsGrid = () => {
    const { habits, untrackHabits } = useContext(HabitsContext);


    const handlePress = () => {
        untrackHabits();
    };

    return (
        <View style={styles.grid}>
            {[0, 2].map(index => (
                <View key={index} style={styles.row}>
                    <HabitsGridButton index={index} habit={habits && habits.length > index ? habits[index] : undefined} />
                    <HabitsGridButton index={index + 1} habit={habits && habits.length > index + 1 ? habits[index + 1] : undefined} />
                </View>
            ))}
            <Text style={styles.hint}>Long press to mark them complete</Text>
            <Pressable
                onPress={handlePress}
            >
                <Text>Clean habits</Text>
            </Pressable >


        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
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
