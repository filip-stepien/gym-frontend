import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { ScheduleViewer } from '@/components/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/ScheduleViewer/ScheduleViewer';
import { Button } from 'antd';
import dayjs from 'dayjs';

const listElements: ScheduleDateListElement[] = [
    {
        date: dayjs('2025-05-19'),
        title: 'Workout 1',
        description: 'Legs, Core, Chest',
        action: <Button>Details</Button>
    },
    {
        date: dayjs('2025-05-19'),
        title: 'Workout 2',
        description: 'Legs, Core, Chest',
        action: <Button>Details</Button>
    }
];

export function ClientWorkoutHistory() {
    return (
        <Card>
            <CardTitle title='Workout History' icon='calendar' />
            <ScheduleViewer listElements={listElements} />
        </Card>
    );
}
