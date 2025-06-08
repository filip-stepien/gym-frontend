import {
    createMembership,
    getPaymentURI,
    getUser,
    listMembershipTypes,
    Membership,
    updateUser
} from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { MembershipStatusCard } from '../MembershipStatusCard';

type MembershipStatusCardWithDataProps = {
    horizontal?: boolean;
    showDetails?: boolean;
};

export function MembershipStatusCardWithData({
    horizontal,
    showDetails
}: MembershipStatusCardWithDataProps) {
    const { user } = useUser();
    const [membership, setMembership] = useState<Membership>();
    const [renewalLoading, setRenewalLoading] = useState(false);

    useEffect(() => {
        async function getMembershipStatus() {
            if (!user?.id) return;
            const userMembership = (await getUser(user.id)).data.membership;
            setMembership(userMembership);
        }

        getMembershipStatus();
    }, [user?.id]);

    const handleRenewClick = async (membershipTypeName: string) => {
        setRenewalLoading(true);

        const createUserMembership = async (): Promise<string | null> => {
            if (!user?.id) return null;

            try {
                const { membership } = (await getUser(user.id)).data;

                if (membership?.uuid) return membership.uuid;

                const membershipTypes = (await listMembershipTypes()).data.content ?? [];
                const selectedType = membershipTypes.find(e => e.type === membershipTypeName);

                if (!selectedType?.uuid) return null;

                const newMembership = (
                    await createMembership({ membershipTypeUuid: selectedType.uuid })
                ).data;

                if (!newMembership?.uuid) return null;

                await updateUser(user.id, {
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

        const membershipId = (await createUserMembership()) as string;
        const paymentUri = (await getPaymentURI(membershipId)).data;

        if (paymentUri) {
            window.location.href = paymentUri;
        }

        setRenewalLoading(false);
    };

    return (
        <MembershipStatusCard
            onRenew={() => handleRenewClick('Standard')}
            renewalLoading={renewalLoading}
            renderRenewButton={membership ? dayjs(dayjs()).isAfter(membership?.validUntil) : true}
            detailsHref={showDetails ? `/${user?.role}/membership` : undefined}
            lastPayment={membership?.validFrom}
            validUntil={membership?.validUntil}
            horizontal={horizontal}
        />
    );
}
