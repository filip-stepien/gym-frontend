import { LastSessionCard } from '@/components/cards/LastSessionCard';
import { Page } from '@/components/layout/Page';
import { ActionButton } from '@/components/common/ActionButton';
import dayjs from 'dayjs';
import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';

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
    timestamp: dayjs(),
    totalExercises: 7,
    totalSets: 21,
    totalVolume: 11_324,
    actions: [
        <ActionButton href='/coach/new-session' primary>
            + New Workout
        </ActionButton>,
        <ActionButton href='/coach/workout/1'>Show Details</ActionButton>
    ],
    detailsHref: '/coach/workout/1'
};

const sessionsCalendarCardData = {
    listElements: [
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href='/coach/workout/1'>Details</ActionButton>
        },
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href='/coach/workout/1'>Details</ActionButton>
        },
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href='/coach/workout/1'>Details</ActionButton>
        }
    ],
    actions: [<ActionButton href='/coach/sessions'>Show My Sessions</ActionButton>]
};

export function CoachDashboardPage() {
    return (
        <Page>
            <LastSessionCard {...lastSessionCardData} />
            <SessionsCalendarCard title='Upcoming Sessions' {...sessionsCalendarCardData} />
        </Page>
    );
}
