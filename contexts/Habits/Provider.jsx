import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HabitsContext } from './Context';

export const HabitsProvider = ({ children }) => {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const loadHabits = async () => {
            try {
                const loadedHabits = await AsyncStorage.getItem('habits');
                if (loadedHabits) {
                    setHabits(JSON.parse(loadedHabits));
                }
            } catch (error) {
                console.error('Failed to load habits from storage', error);
            }
        };
        loadHabits();
    }, []);

    const addHabit = async (habit) => {
        try {
            const updatedHabits = [...habits, habit];
            setHabits(updatedHabits);
            await AsyncStorage.setItem('habits', JSON.stringify(updatedHabits));
        } catch (error) {
            console.error('Failed to save habit', error);
        }
    };

    const trackHabit = async (index) => {
        try {
            const newHabits = [...habits];
            if (newHabits[index]) {
                newHabits[index].last_tracked_at = new Date().toISOString();
                newHabits[index].streak += 1;
                setHabits(newHabits);
                await AsyncStorage.setItem('habits', JSON.stringify(newHabits));
            }
        } catch (error) {
            console.error('Failed to update habit', error);
        }
    };

    const untrackHabits = async () => {
        try {
            const resetHabits = habits.map(habit => ({
                ...habit,
                last_tracked_at: null,
                streak: 0
            }));
            setHabits(resetHabits);
            await AsyncStorage.setItem('habits', JSON.stringify(resetHabits));
        } catch (error) {
            console.error('Failed to reset habits', error);
        }
    };

    return (
        <HabitsContext.Provider value={{ habits, addHabit, trackHabit, untrackHabits }}>
            {children}
        </HabitsContext.Provider>
    );
};