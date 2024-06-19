import React, { useState, useContext } from 'react';
import { StyleSheet, View, Modal, Pressable, Text, TextInput, KeyboardAvoidingView, Platform, Vibration } from 'react-native';

import { WalletContext } from '@/contexts/Wallet/Context';


export const RewardsParticipateModalHeader = () => {
    const { wallet } = useContext(WalletContext);
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Participate in the Draw</Text>
            <Text style={styles.subtitle}>{`You have ${wallet.tickets} Tickets`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
});