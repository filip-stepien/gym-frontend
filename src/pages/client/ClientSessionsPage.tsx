import { Button } from 'antd';
import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';
import dayjs from 'dayjs';

const sessionsCalendarCardData = {
    listElements: [
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <Button href='/client/workout/xd'>Details</Button>
        },
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <Button href='/client/workout/xd'>Details</Button>
        },
        {
            date: dayjs(),
            title: 'Workout 1',
            description: 'description',
            action: <Button href='/client/workout/xd'>Details</Button>
        }
    ]
};

export function ClientSessionsPage() {
    return <SessionsCalendarCard title='Your Sessions' fullscreen {...sessionsCalendarCardData} />;
}
