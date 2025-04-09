import { Page } from '@/components/Page';
import { TotalProgress } from './TotalProgress';
import { ExerciseProgress } from './ExerciseProgress';

export function ClientProgress() {
    return (
        <Page>
            <TotalProgress />
            <ExerciseProgress />
        </Page>
    );
}
