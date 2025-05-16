import { Avatar } from '@/components/Avatar';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { ScheduleViewer } from '@/components/ScheduleViewer';
import { ScheduleListElement } from '@/components/ScheduleViewer/ScheduleList';
import { Button } from 'antd';

const listElements: ScheduleListElement[] = [
    {
        title: 'Workout 1',
        description: 'description',
        avatar: <Avatar />,
        action: <Button>Join</Button>
    },
    {
        title: 'Workout 1',
        description: 'description'
    },
    {
        title: 'Workout 1',
        description: 'description'
    },
    {
        title: 'Workout 1',
        description: 'description'
    },
    {
        title: 'Workout 1',
        description: 'description'
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
            <ScheduleViewer
                listElements={listElements}
                actions={scheduleViewerActions}
                onDateSelect={console.log}
            />
        </Card>
    );
}
