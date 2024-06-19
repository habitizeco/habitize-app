import React, { useState } from 'react';

import { View } from 'react-native';

import { RewardsParticipateModal } from '@/components/Rewards/Participate/Modal';
import { RewardsParticipateSuccessModal } from '@/components/Rewards/Participate/SuccessModal';

import { Button } from '@/elements/Button';

export const RewardsParticipate = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);

    return (
        <View>
            <Button
                title="Add tickets to the ruffle" onPress={() => setModalVisible(true)}
            />
            <RewardsParticipateModal modalVisible={modalVisible} setModalVisible={setModalVisible} setSuccessModalVisible={setSuccessModalVisible} />
            <RewardsParticipateSuccessModal successModalVisible={successModalVisible} setSuccessModalVisible={setSuccessModalVisible} />
        </View>
    );
}

