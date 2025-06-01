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
        description: 'Legs, Core, Chest',
        action: <Button href='/client/workout/xd'>Details</Button>
    },
    {
        date: dayjs(),
        title: 'Workout 2',
        description: 'Legs, Core, Chest',
        action: <Button href='/client/workout/xd'>Details</Button>
    }
];

export function WorkoutHistory() {
    return (
        <Card>
            <CardTitle title='Workout History' icon='calendar' />
            <ScheduleViewer listElements={listElements} />
        </Card>
    );
}
