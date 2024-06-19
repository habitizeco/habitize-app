import { useState, useContext } from 'react';
import { StyleSheet, View, Modal, Pressable, Text, TextInput, KeyboardAvoidingView, Platform, Vibration } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RewardsParticipateModalHeader } from './Header';
import { Button } from '@/elements/Button';

import { WalletContext } from '@/contexts/Wallet/Context';

interface Props {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    setSuccessModalVisible: (visible: boolean) => void;
}

interface inputTicketAmountType {
    value: number;
    error?: boolean;
    message?: string;
}

export const RewardsParticipateModal: React.FC<Props> = ({ modalVisible, setModalVisible, setSuccessModalVisible }) => {
    const [inputTicketAmount, setInputTicketAmount] = useState<inputTicketAmountType>({ value: 0 });
    const { wallet, spendWallet } = useContext(WalletContext);
    console.log(wallet);

    const onChangeInputTicketAmount = (value: string) => {
        if (value === '') {
            setInputTicketAmount({ value: 0 });
            return;
        }
        const amount = parseInt(value);
        if (amount > wallet.tickets) {
            setInputTicketAmount({
                error: true,
                message: 'You do not have enough tickets',
                value: amount,
            })
        } else {
            setInputTicketAmount({ value: amount });
        }

    };
    const onSubmit = () => {
        spendWallet('tickets', inputTicketAmount.value)
        setModalVisible(false);
        setSuccessModalVisible(true);
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <View style={styles.modal}>
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}>
                            <Icon name="close" style={styles.closeButtonIcon} />
                        </Pressable>
                        <View style={styles.content}>

                            <RewardsParticipateModalHeader />
                            <View style={styles.input}>
                                <TextInput
                                    style={!inputTicketAmount.error ? styles.inputField : styles.inputFieldError}
                                    onChangeText={(value) => onChangeInputTicketAmount(value)}
                                    value={String(inputTicketAmount.value)}
                                    keyboardType="numeric"
                                />
                                {inputTicketAmount.error && <Text style={styles.inputErrorMessage}>{inputTicketAmount.message}</Text>}
                            </View>
                            <View style={styles.quickActions}>
                                <Pressable
                                    style={inputTicketAmount.value === 100 ? styles.quickActionsButtonSelected : styles.quickActionsButton}
                                    onPress={() => { setInputTicketAmount({ value: 100 }); }}
                                >
                                    <Text style={inputTicketAmount.value === 100 ? styles.quickActionsButtonSelectedText : styles.quickActionsButtonText}>100</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.quickActionsButton}
                                    onPress={() => setInputTicketAmount({ value: 1000 })}>
                                    <Text style={styles.quickActionsButtonText}>1000</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.quickActionsButton}
                                    onPress={() => setInputTicketAmount({ value: wallet.tickets })}>
                                    <Text style={styles.quickActionsButtonText}>Max</Text>
                                </Pressable>
                            </View>
                            <Button
                                title="Confirm"
                                disabled={inputTicketAmount.error || inputTicketAmount.value === 0}
                                onPress={onSubmit}
                            />

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    modal: {
        marginBottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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