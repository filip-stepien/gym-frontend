import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { ScheduleViewer } from '@/components/common/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/common/ScheduleViewer/ScheduleViewer';
import { Button } from 'antd';
import dayjs from 'dayjs';

const listElements: ScheduleDateListElement[] = [
    {
        date: dayjs(),
        title: 'Workout 1',
        description: 'description',
        action: <Button href='/coach/workout/1'>Details</Button>
    },
    {
        date: dayjs(),
        title: 'Workout 1',
        description: 'description',
        action: <Button href='/coach/workout/1'>Details</Button>
    },
    {
        date: dayjs(),
        title: 'Workout 1',
        description: 'description',
        action: <Button href='/coach/workout/1'>Details</Button>
    }
];

export function CoachClientLastWorkouts() {
    return (
        <Card>
            <CardTitle title='Last Workouts' icon='sessions' />
            <ScheduleViewer listElements={listElements} />
        </Card>
    );
}
