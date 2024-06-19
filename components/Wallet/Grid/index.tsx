import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { View, Text } from 'react-native';

import { WalletContext } from '@/contexts/Wallet/Context';

import { styles } from './styles';

export const WalletGrid = () => {

    const { wallet } = useContext(WalletContext);
    const { t } = useTranslation();

    return (
        <View style={styles.grid}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{t('wallet.grid.tickets.title')}</Text>
                <Text style={styles.cardContent}>{wallet.tickets}</Text>
            </View>
            <View style={styles.twoColumns}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>How to earn?</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Why to earn?</Text>
                </View>
            </View>
        </View>
    );
}