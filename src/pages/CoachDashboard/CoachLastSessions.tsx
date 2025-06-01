import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { LastSession } from '@/components/cards/LastSessionCard';
import { Button } from 'antd';
import dayjs from 'dayjs';

const exercises = ['Bench Press', 'Push up', 'Lateral raise', 'Pull up', 'Squat', 'Deadlift'];
const tags = ['chest', 'legs'];
const timestamp = dayjs();
const actions = [
    <Button type='primary' href='/coach/new-session'>
        + New session
    </Button>,
    <Button href='/coach/workout/xd'>Show Details</Button>
];

export function CoachLastSessions() {
    return (
        <Card>
            <CardTitle title='Last Session' icon='sessions' />
            {/* <LastSession
                exercises={exercises}
                tags={tags}
                timestamp={timestamp}
                actions={actions}
                detailsHref='/coach/workout/xd'
            /> */}
        </Card>
    );
}
