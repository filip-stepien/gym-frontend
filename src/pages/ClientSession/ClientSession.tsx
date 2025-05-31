import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { ScheduleViewer } from '@/components/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/ScheduleViewer/ScheduleViewer';
import { Button } from 'antd';
import { Avatar } from '@/components/Avatar';
import dayjs from 'dayjs';

const listElements: ScheduleDateListElement[] = [
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
    },
    {
        date: dayjs(),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button href='/client/workout/xd'>Details</Button>
    }
];

export function ClientSession() {
    return (
        <Card>
            <CardTitle title='Your sessions' icon='sessions' />
            <ScheduleViewer listElements={listElements} fullscreen />
        </Card>
    );
}
