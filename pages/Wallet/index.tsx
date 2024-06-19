import { useEffect, useContext } from 'react';

import { View } from 'react-native';


import { WalletHeader } from '@/components/Wallet/Header';
import { WalletGrid } from '@/components/Wallet/Grid';
import { WalletWithdraw } from '@/components/Wallet/Withdraw';

import { styles } from './styles';

export default function WalletPage() {
    return (
        <View style={styles.container}>
            <View>
                <WalletHeader />
                <WalletGrid />
            </View>
            <WalletWithdraw />
        </View>
    );
}
