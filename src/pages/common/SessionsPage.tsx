import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';
import dayjs from 'dayjs';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';
import { ActionButton } from '@/components/common/ActionButton';

// debug: get role from url
// get role from useUser hook in prod instead
const role = getRoleFromUrl();

const sessionsCalendarCardData = {
    listElements: [
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href={`/${role}/workout/1`}>Details</ActionButton>
        },
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href={`/${role}/workout/1`}>Details</ActionButton>
        },
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <ActionButton href={`/${role}/workout/1`}>Details</ActionButton>
        }
    ]
};

export function SessionsPage() {
    return <SessionsCalendarCard title='Your Sessions' fullscreen {...sessionsCalendarCardData} />;
}
