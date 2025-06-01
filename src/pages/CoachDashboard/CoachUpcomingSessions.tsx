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

const scheduleActions = [<Button href='/coach/sessions'>Show Full Calendar</Button>];

export function CoachUpcomingSessions() {
    return (
        <Card>
            <CardTitle title='Upcoming Sessions' icon='calendar' />
            <ScheduleViewer listElements={scheduleListElements} actions={scheduleActions} />
        </Card>
    );
}
