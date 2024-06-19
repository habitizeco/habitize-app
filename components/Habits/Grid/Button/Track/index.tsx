import { useContext, useState, useRef } from 'react';
import { StyleSheet, Pressable, Text, View, Dimensions, Animated } from 'react-native';
import HabitType from '@/types/habit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HabitsContext } from '@/contexts/Habits/Context';

import styles from './styles';

interface Props {
    index: number;
    habit: HabitType;
}

export const HabitsGridButtonTrack: React.FC<Props> = ({ index, habit }) => {
    const { trackHabit } = useContext(HabitsContext);
    const [isPressed, setIsPressed] = useState(false);
    const [progress, setProgress] = useState(0);
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const pressTimer = useRef<NodeJS.Timeout | null>(null);

    const isTrackedToday = () => {
        const today = new Date();
        const lastTracked = habit.last_tracked_at ? new Date(habit.last_tracked_at) : null;
        return lastTracked && lastTracked.toDateString() === today.toDateString();
    };

    const handlePressIn = () => {
        setIsPressed(true);
        setProgress(0);
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 4000, // Cambiado a 4 segundos
            useNativeDriver: true
        }).start();

        pressTimer.current = setInterval(() => {
            setProgress(prev => {
                if (prev >= 4) { // Cambiado a 4 segundos
                    clearInterval(pressTimer.current!);
                    pressTimer.current = null;
                    trackHabit(index);
                    return 4;
                }
                return prev + 1;
            });
        }, 1000);
    };

    const handlePressOut = () => {
        setIsPressed(false);
        Animated.timing(scaleAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();

        if (pressTimer.current) {
            clearInterval(pressTimer.current);
            pressTimer.current = null;
        }
    };

    return (
        <>
            <Pressable
                style={[styles.button, isTrackedToday() ? styles.buttonTracked : {}]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
                <Text style={[styles.text, isTrackedToday() ? styles.textTracked : {}]}>{habit.name}</Text>
                <View style={styles.streak}>
                    <Text style={[styles.streakAmount, isTrackedToday() ? styles.textTracked : {}]}>{habit.streak}</Text>
                    <Icon name="check" style={[styles.streakIcon, isTrackedToday() ? styles.textTracked : {}]} />
                </View>
                {isPressed && (
                    <Animated.View style={[
                        styles.circle,
                        {
                            transform: [{ scale: scaleAnim }]
                        }
                    ]} />
                )}
            </Pressable>
        </>
    );
};
