import { Avatar } from '@/components/Avatar';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { ScheduleViewer } from '@/components/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/ScheduleViewer/ScheduleViewer';
import { Button } from 'antd';
import dayjs from 'dayjs';

const listElements: ScheduleDateListElement[] = [
    {
        date: dayjs('2025-06-16'),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button>Join</Button>
    },
    {
        date: dayjs('2025-06-15'),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button>Join</Button>
    },
    {
        date: dayjs('2025-06-15'),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button>Join</Button>
    }
];

const scheduleViewerActions = [
    <Button type='primary' className='primary'>
        + Join Session
    </Button>,
    <Button>Show Full Callendar</Button>
];

export function UpcomingSession() {
    return (
        <Card>
            <CardTitle title='Upcoming session' icon='sessions' />
            <ScheduleViewer listElements={listElements} actions={scheduleViewerActions} />
        </Card>
    );
}
