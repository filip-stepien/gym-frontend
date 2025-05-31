import { Avatar } from '@/components/Avatar';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { ScheduleViewer } from '@/components/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/ScheduleViewer/ScheduleViewer';
import { Button } from 'antd';
import dayjs from 'dayjs';

const listElements: ScheduleDateListElement[] = [
    {
        date: dayjs(),
        title: 'Workout 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus esse corporis illum delectus quidem soluta in officia accusamus facere.',
        avatar: <Avatar />,
        action: <Button href='/client/workout/xd'>Details</Button>
    },
    {
        date: dayjs(),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button href='/client/workout/xd'>Details</Button>
    },
    {
        date: dayjs(),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button href='/client/workout/xd'>Details</Button>
    }
];

const scheduleViewerActions = [
    <Button type='primary' className='primary' href='/client/details'>
        Join Session
    </Button>,
    <Button href='/client/sessions'>Show Calendar</Button>
];

export function UpcomingSession() {
    return (
        <Card>
            <CardTitle title='Upcoming sessions' icon='sessions' />
            <ScheduleViewer listElements={listElements} actions={scheduleViewerActions} />
        </Card>
    );
}
