import { useContext, useState } from 'react';

import { StyleSheet, View, Image, Pressable, Text, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import DateTimePickerModal from "react-native-modal-datetime-picker";


import { WalletContext } from '@/contexts/Wallet/Context';
import { Button } from '@/elements/Button';


import habitType from '@/types/habit'
import { HabitsContext } from '@/contexts/Habits/Context';

interface Props {
    setModalVisible: (visible: boolean) => void;
}

interface inputHabitType {
    value: habitType;
    error?: boolean;
    message?: string;
}


export const HabitsGridButtonAddModal: React.FC<Props> = ({ setModalVisible }) => {
    const { addHabit } = useContext(HabitsContext);

    const [inputHabit, setInputHabit] = useState<inputHabitType>({
        value: {
            name: '',
            weekdays: [true, true, true, true, true, false, false],
            hour: 9,
            minutes: 0,
            last_tracked_at: null,
            streak: 0,
        }
    });

    const predefinedHabits = ["Do Pushups", "Walk", "Read"];


    const [formStep, setFormStep] = useState(1);

    const onChangeInputHabitName = (value: string) => {
        setInputHabit({
            value: {
                ...inputHabit.value,
                name: value,
            }
        });
    }
    const onPressHabitName = (value: string) => {
        setInputHabit({
            value: {
                ...inputHabit.value,
                name: value,
            }
        });
        setFormStep(2);
    }

    const onChangeInputHabitHour = (value: string) => {
        setInputHabit({
            value: {
                ...inputHabit.value,
                hour: parseInt(value),
            }
        });
    }
    const onChangeInputHabitMinutes = (value: string) => {
        setInputHabit({
            value: {
                ...inputHabit.value,
                minutes: parseInt(value),
            }
        });
    }

    const days = ["L", "M", "X", "J", "V", "S", "D"]

    const handleWeekdaySelection = (index: number) => {
        const newWeekdays = inputHabit.value.weekdays;
        newWeekdays[index] = !newWeekdays[index];

        setInputHabit({
            value: {
                ...inputHabit.value,
                weekdays: newWeekdays,
            }
        });
    };

    const handleSubmit = () => {
        addHabit(inputHabit.value);
        setModalVisible(false)
    }


    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={true}
        >
            {(formStep === 1) && (
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}>
                            <Icon name="close" style={styles.closeButtonIcon} />
                        </Pressable>
                        <View style={styles.header}>
                            <Text style={styles.title}>Lets create your habit</Text>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Create your own</Text>
                            <TextInput
                                style={styles.inputField}
                                onChangeText={(value) => onChangeInputHabitName(value)}
                                value={String(inputHabit.value.name)}
                            />
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Or choose one</Text>
                            {predefinedHabits.map(predefinedHabit => (
                                <Pressable
                                    style={styles.habitButton}
                                    onPress={() => onPressHabitName(predefinedHabit)}>
                                    <Text style={styles.inputLabel}>{predefinedHabit}</Text>
                                </Pressable>
                            ))}
                        </View>




                    </View>
                    <Button
                        title="Continue"
                        disabled={inputHabit.value.name === ''}
                        onPress={() => setFormStep(2)}
                    />
                </View>
            )}
            {(formStep === 2) && (
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}>
                            <Icon name="close" style={styles.closeButtonIcon} />
                        </Pressable>
                        <View style={styles.header}>
                            <Text style={styles.title}>When will you do this habit?</Text>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Specific days of the week</Text>
                            <View style={styles.weekdaysSelector}>

                                {inputHabit.value.weekdays.map((isSelected, index) => (
                                    <Pressable
                                        key={index}
                                        onPress={() => handleWeekdaySelection(Number(index))}
                                        style={[styles.weekdayButton, (isSelected ? styles.weekdayButtonSelected : {})]}
                                    >
                                        <Text style={[styles.weekdayButtonText, (isSelected ? styles.weekdayButtonTextSelected : {})]}>{days[index]}</Text>
                                    </Pressable>
                                ))}
                            </View>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Habit time</Text>
                            <View style={styles.timeSelector}>
                                <TextInput
                                    style={[styles.inputField, styles.inputTimeField]}
                                    onChangeText={onChangeInputHabitHour}
                                    value={inputHabit.value.hour.toString()}
                                    keyboardType="numeric"
                                />
                                <Text>:</Text>
                                <TextInput
                                    style={[styles.inputField, styles.inputTimeField]}
                                    onChangeText={onChangeInputHabitMinutes}
                                    value={inputHabit.value.minutes.toString()}
                                    keyboardType="numeric"
                                />

                            </View>

                        </View>
                    </View>

                    <Button
                        title="Add Habit"
                        disabled={inputHabit.value.name === ''}
                        onPress={() => handleSubmit()}
                    />
                </View>
            )}



        </Modal>

    );
}

const styles = StyleSheet.create({
    modal: {
        height: '100%',
        padding: 30,
        justifyContent: 'space-between',
    },
    container: {
        gap: 20,
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#e4e4e4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonIcon: {
        color: '#666',
        fontSize: 15,
    },
    header: {
        marginTop: 30,
        gap: 5,
    },
    title: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        gap: 10,
    },
    inputLabel: {
        fontSize: 16,
    },
    inputField: {
        borderColor: '#d4d4d4',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 18,
        borderRadius: 10,
    },
    habitButton: {
        padding: 15,
        borderRadius: 10,
        borderColor: '#d4d4d4',
        borderWidth: 1,

    },
    weekdaysSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    },
    weekdayButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#e4e4e4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weekdayButtonSelected: {
        backgroundColor: '#000',
    },
    weekdayButtonText: {
        fontSize: 18,
    },
    weekdayButtonTextSelected: {
        color: 'white',
    },
    timeSelector: {
        borderColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        alignItems: 'center',
    },
    inputTimeField: {
        textAlign: 'center',
        fontSize: 24,
        width: 75,
    }
});
