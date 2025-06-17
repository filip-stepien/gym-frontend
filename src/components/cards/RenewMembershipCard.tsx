import {
    getUser,
    listMembershipTypes,
    createMembership,
    updateUser,
    getPaymentURI
} from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';
import { Button, Flex, Typography } from 'antd';
import { useState } from 'react';

const { Text, Title } = Typography;

export function RenewMembershipCard() {
    const { user } = useUser();
    const [renewalLoading, setRenewalLoading] = useState(false);

    const handleRenewClick = async (membershipTypeName: string) => {
        if (!user?.id) return;

        setRenewalLoading(true);

        const createUserMembership = async (): Promise<string | null> => {
            const userId = user.id as string;
            try {
                const { membership } = (await getUser(userId)).data;

                if (membership?.uuid) return membership.uuid;

                const membershipTypes = (await listMembershipTypes()).data.content ?? [];
                const selectedType = membershipTypes.find(e => e.type === membershipTypeName);

                if (!selectedType?.uuid) return null;

                const newMembership = (
                    await createMembership({ membershipTypeUuid: selectedType.uuid })
                ).data;

                if (!newMembership?.uuid) return null;

                await updateUser(userId, {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    membershipUuid: newMembership.uuid
                });

                return newMembership.uuid;
            } catch (e) {
                console.error(e);
                return null;
            }
        };

        const membershipId = await createUserMembership();
        if (!membershipId) return null;

        const paymentUri = (await getPaymentURI(membershipId)).data;
        if (paymentUri) {
            window.location.href = paymentUri;
        }

        setRenewalLoading(false);
    };

    return (
        <Flex vertical className='h-screen w-screen' justify='center' align='center'>
            <Flex vertical className='bg-card shadow-card p-large gap-middle'>
                <Title level={4}>Oops! Your membership has expired.</Title>
                <Text>Renew now to regain full access to all features.</Text>
                <Button
                    type='primary'
                    loading={renewalLoading}
                    onClick={() => handleRenewClick('Standard')}
                >
                    Renew
                </Button>
            </Flex>
        </Flex>
    );
}
