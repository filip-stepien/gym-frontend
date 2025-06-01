import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { ScheduleViewer } from '@/components/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/ScheduleViewer/ScheduleViewer';
import { Button } from 'antd';
import dayjs from 'dayjs';

const scheduleListElements: ScheduleDateListElement[] = [
    {
        date: dayjs(),
        description: 'workout description',
        title: 'Workout 1',
        action: <Button>Details</Button>
    },
    {
        date: dayjs(),
        description: 'workout description',
        title: 'Workout 2',
        action: <Button>Details</Button>
    }
];

export function EmployeeScheduledSessions() {
    return (
        <Card>
            <CardTitle title='Scheduled Sessions' icon='calendar' />
            <ScheduleViewer listElements={scheduleListElements} />
        </Card>
    );
}
