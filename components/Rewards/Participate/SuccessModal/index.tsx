import React, { useState, useContext } from 'react';
import { StyleSheet, View, Modal, Pressable, Text, TextInput, KeyboardAvoidingView, Platform, Vibration } from 'react-native';
import { Button } from '@/elements/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import { WalletContext } from '@/contexts/Wallet/Context';

interface Props {
    successModalVisible: boolean;
    setSuccessModalVisible: (visible: boolean) => void;
}


export const RewardsParticipateSuccessModal: React.FC<Props> = ({ successModalVisible, setSuccessModalVisible }) => {

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={successModalVisible}
                onRequestClose={() => setSuccessModalVisible(false)}
            >
                <View style={styles.container}>

                    <View style={styles.modal}>
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setSuccessModalVisible(false)}>
                            <Icon name="close" style={styles.closeButtonIcon} />
                        </Pressable>
                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.title}>Congrats!</Text>
                                <Text style={styles.subtitle}>You have raised your chances to win the main prize</Text>
                            </View>
                            <Button
                                title="Continue"
                                onPress={() => setSuccessModalVisible(false)}
                            />

                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        marginBottom: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
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
    content: {
        width: '100%',
        gap: 20
    },
    header: {
        gap: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        gap: 5,
    },
    inputField: {
        borderColor: '#d4d4d4',
        borderWidth: 1,
        width: '100%',
        padding: 10,
        borderRadius: 10,
    },
    inputFieldError: {
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
        padding: 10,
        color: 'red',
        borderRadius: 10,
    },
    inputErrorMessage: {
        color: 'red',
        fontSize: 12,
        textAlign: 'right',
    },
    quickActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 15,
    },
    quickActionsButtonSelected: {
        flex: 1,
        backgroundColor: '#075AFE',
        borderColor: '#075AFE',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quickActionsButton: {
        flex: 1,
        borderColor: '#075AFE',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quickActionsButtonSelectedText: {
        color: 'white',
    },
    quickActionsButtonText: {
        color: '#075AFE',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#075AFE',
        padding: 15,
        width: '100%',
    },
    text: {
        fontSize: 18,
        letterSpacing: 0.50,
        fontWeight: 'bold',
        color: 'white',
    }
});