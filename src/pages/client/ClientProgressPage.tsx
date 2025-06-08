import { Page } from '@/components/layout/Page';
import { TotalProgressCardWithData } from '@/components/cards/with-data/TotalProgressCardWithData';
import { ExerciseProgressCardWithData } from '@/components/cards/with-data/ExerciseProgressCardWithData';

export function ClientProgressPage() {
    return (
        <Page>
            <TotalProgressCardWithData />
            <ExerciseProgressCardWithData />
        </Page>
    );
}
