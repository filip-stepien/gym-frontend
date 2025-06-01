import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { ScheduleViewer } from '@/components/common/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/common/ScheduleViewer/ScheduleViewer';
import { Button } from 'antd';
import dayjs from 'dayjs';

const scheduleListElements: ScheduleDateListElement[] = [
    {
        date: dayjs(),
        description: 'workout description',
        title: 'Workout 1',
        action: <Button href='/coach/workout/xd'>Details</Button>
    },
    {
        date: dayjs(),
        description: 'workout description',
        title: 'Workout 2',
        action: <Button href='/coach/workout/xd'>Details</Button>
    }
];

const scheduleActions = [
    <Button type='primary' href='/coach/new-session'>
        + New Session
    </Button>
];

export function CoachSessions() {
    return (
        <Card>
            <CardTitle title='Training Sessions' icon='sessions' />
            <ScheduleViewer
                fullscreen
                listElements={scheduleListElements}
                actions={scheduleActions}
            />
        </Card>
    );
}
