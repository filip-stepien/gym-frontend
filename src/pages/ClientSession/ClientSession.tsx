import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { ScheduleViewer } from '@/components/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/ScheduleViewer/ScheduleViewer';
import { Button } from 'antd';
import { Avatar } from '@/components/Avatar';
import dayjs from 'dayjs';

const listElements: ScheduleDateListElement[] = [
    {
        date: dayjs('2025-05-16'),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button>Join</Button>
    },
    {
        date: dayjs('2025-05-15'),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button>Join</Button>
    },
    {
        date: dayjs('2025-05-15'),
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button>Join</Button>
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
