import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { LastSession as LastSessionComponent } from '@/components/LastSession';
import { Button } from 'antd';

const tags = ['chest', 'shoulders'];

const exercises = [
    'Bent Over Row',
    'Bicep Curl',
    'Bench Press',
    'Deadlift',
    'Tricep Extension',
    'e',
    'a'
];

const coach = 'John Pork';

const actions = [<Button href='/client/workout/xd'>Show Details</Button>];

export function LastSession() {
    return (
        <Card>
            <CardTitle title='Last Session' icon='sessions' />
            <LastSessionComponent
                tags={tags}
                exercises={exercises}
                coach={coach}
                actions={actions}
                detailsHref='/client/workout/xd'
                totalSets={30}
                totalExercises={10}
                totalVolume={1000}
            />
        </Card>
    );
}
