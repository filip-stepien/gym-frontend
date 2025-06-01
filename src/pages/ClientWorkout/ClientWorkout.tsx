import { WorkoutHistory } from './components/WorkoutHistory';
import { NewWorkout } from './components/NewWorkout';
import { Page } from '@/components/Page';

export function ClientWorkout() {
    return (
        <Page>
            <WorkoutHistory />
            <NewWorkout />
        </Page>
    );
}
