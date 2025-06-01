import { Flex } from 'antd';
import { Page } from '@/components/layout/Page';
import { MembershipStatusCard } from '@/components/cards/MembershipStatusCard';
import { ProgressOverviewCard } from '@/components/cards/ProgressOverviewCard';
import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';
import { LastSessionCard } from '@/components/cards/LastSessionCard';
import { ActionButton } from '@/components/common/ActionButton';
import dayjs from 'dayjs';

const membershipStatusData = {
    lastPayment: dayjs(),
    validUntil: dayjs().add(30, 'day'),
    detailsHref: '/client/membership'
};

const progressOverviewData = {
    weeklyTotalSets: {
        value: 86,
        trend: 10
    },
    weeklySessionVolume: {
        value: 32_938,
        trend: 0
    }
};

const lastSessionCardData = {
    tags: ['chest', 'bicep', 'tricep'],
    exercises: [
        'Bench press',
        'Push up',
        'Lateral raise',
        'Pull up',
        'Bicep curl',
        'Squat',
        'Barbell row'
    ],
    coach: 'Jonh Pork',
    timestamp: dayjs(),
    totalExercises: 7,
    totalSets: 21,
    totalVolume: 11_324,
    actions: [<ActionButton href='/client/workout/1'>Show Details</ActionButton>],
    detailsHref: '/client/workout/1'
};

const sessionsCalendarCardData = {
    listElements: [
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href='/client/workout/1'>Details</ActionButton>
        },
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href='/client/workout/1'>Details</ActionButton>
        },
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href='/client/workout/1'>Details</ActionButton>
        }
    ],
    actions: [<ActionButton href='/client/sessions'>Show My Sessions</ActionButton>]
};

export function ClientDashboardPage() {
    return (
        <Page>
            <div className='bg-layout gap-small lg:gap-layout md:flex'>
                <Flex flex={1}>
                    <MembershipStatusCard {...membershipStatusData} />
                </Flex>
                <Flex vertical className='gap-small lg:gap-layout pt-small w-full flex-2 md:pt-0'>
                    <ProgressOverviewCard {...progressOverviewData} />
                    <LastSessionCard {...lastSessionCardData} />
                </Flex>
            </div>
            <SessionsCalendarCard title='Upcoming Sessions' {...sessionsCalendarCardData} />
        </Page>
    );
}
