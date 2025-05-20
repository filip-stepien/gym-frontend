import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { LastSession } from '@/components/LastSession';
import { Button } from 'antd';
import dayjs from 'dayjs';

const exercises = ['Bench Press', 'Push up', 'Lateral raise', 'Pull up', 'Squat', 'Deadlift'];
const tags = ['chest', 'legs'];
const timestamp = dayjs();
const actions = [<Button type='primary'>+ New session</Button>, <Button>Show Details</Button>];

export function CoachLastSessions() {
    return (
        <Card>
            <CardTitle title='Last Sessions' icon='sessions' />
            <LastSession
                exercises={exercises}
                tags={tags}
                timestamp={timestamp}
                actions={actions}
            />
        </Card>
    );
}
