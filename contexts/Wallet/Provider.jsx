import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { WalletContext } from './Context';

export const WalletProvider = ({ children }) => {
    const [wallet, setWallet] = useState({
        tickets: 2000,
        cents: 150
    });

    useEffect(() => {
        const loadWallet = async () => {
            try {
                const loadedWallet = await AsyncStorage.getItem('wallet');
                if (loadedWallet) {
                    setWallet(JSON.parse(loadedWallet));
                }
            } catch (error) {
                console.error('Failed to load Wallet from storage', error);
            }
        };
        loadWallet();
    }, []);

    const saveWallet = async (field, amount) => {
        try {
            const updatedWallet = {
                ...wallet,
                [field]: wallet[field] + amount
            };
            setWallet(updatedWallet);
            await AsyncStorage.setItem('wallet', JSON.stringify(updatedWallet));
        } catch (error) {
            throw error;
        }
    };

    const spendWallet = async (field, amount) => {
        try {
            if (wallet[field] < amount) {
                throw new Error(`Insufficient ${field} in wallet`);
            }

            const updatedWallet = {
                ...wallet,
                [field]: wallet[field] - amount
            };

            setWallet(updatedWallet);
            await AsyncStorage.setItem('wallet', JSON.stringify(updatedWallet));
        } catch (error) {
            console.error('Failed to spend Wallet', error);
            throw error;
        }
    };


    return (
        <WalletContext.Provider value={{ wallet, saveWallet, spendWallet }}>
            {children}
        </WalletContext.Provider>
    );
};
