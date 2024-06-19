
import { useState } from 'react';

import { StyleSheet, Pressable, Text, Dimensions } from 'react-native';

import { HabitsGridButtonAddModal } from './Modal';

interface Props {
    index: number;
}

export const HabitsGridButtonAdd: React.FC<Props> = ({ index }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.text}>Add new habit</Text>
            </Pressable>
            {modalVisible && (<HabitsGridButtonAddModal setModalVisible={setModalVisible} />)}
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        width: (Dimensions.get('window').width / 2) - 30,
        height: (Dimensions.get('window').width / 2) - 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: '#d4d4d4',
        borderWidth: 1,
    },
    text: {
        fontSize: 16,
    },
});
