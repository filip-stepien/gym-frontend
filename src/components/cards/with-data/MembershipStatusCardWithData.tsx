import { getUser, Membership } from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';
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

    useEffect(() => {
        async function getMembershipStatus() {
            if (!user?.id) return;
            const userMembership = (await getUser(user.id)).data.membership;
            setMembership(userMembership);
        }

        getMembershipStatus();
    }, [user?.id]);

    return (
        <MembershipStatusCard
            detailsHref={showDetails ? `/${user?.role}/membership` : undefined}
            lastPayment={membership?.validFrom}
            validUntil={membership?.validUntil}
            horizontal={horizontal}
        />
    );
}
