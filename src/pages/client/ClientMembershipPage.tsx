import { Page } from '@/components/layout/Page';
import { PersonalDetailsCard } from '@/components/cards/PersonalDetailsCard';
import { MembershipStatusCard } from '@/components/cards/MembershipStatusCard';
import dayjs from 'dayjs';

const membershipOverviewCardData = {
    firstName: 'John',
    lastName: 'Pork',
    dateOfBirth: '21.02.2002',
    email: 'email@email.com'
};

const membershipStatusData = {
    lastPayment: dayjs(),
    validUntil: dayjs().add(30, 'day')
};

export function ClientMembershipPage() {
    return (
        <Page>
            <MembershipStatusCard {...membershipStatusData} />
            <PersonalDetailsCard {...membershipOverviewCardData} />
        </Page>
    );
}
