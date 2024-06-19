import React from 'react';
import { HabitsGridButtonAdd } from '@/components/Habits/Grid/Button/Add'
import { HabitsGridButtonTrack } from '@/components/Habits/Grid/Button/Track'
import HabitType from '@/types/habit';

interface Props {
    index: number;
    habit?: HabitType;
}

export const HabitsGridButton: React.FC<Props> = ({ index, habit }) => {
    return habit ? (
        <HabitsGridButtonTrack index={index} habit={habit} />
    ) : (
        <HabitsGridButtonAdd index={index} />
    );
}