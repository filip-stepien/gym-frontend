import { Page } from '@/components/Page';
import { TotalProgressCard } from '../../components/TotalProgressCard';
import { ExerciseProgressCard } from '../../components/ExerciseProgressCard';
import type { ChartData } from '@/components/Chart';

const chartData: ChartData[] = [
    {
        category: 'Volume',
        timeSeries: {
            lastWeek: {
                labels: ['1', '2', '3'],
                values: [1, 2, 3]
            },
            lastThreeWeeks: {
                labels: ['1', '2', '3'],
                values: [3, 4, 5]
            },
            lastYear: {
                labels: ['1', '2', '3'],
                values: [6, 7, 8]
            }
        }
    },
    {
        category: 'Reps',
        timeSeries: {
            lastWeek: {
                labels: ['1', '2', '3'],
                values: [9, 10, 11]
            },
            lastThreeWeeks: {
                labels: ['1', '2', '3'],
                values: [12, 13, 14]
            },
            lastYear: {
                labels: ['1', '2', '3'],
                values: [15, 16, 17]
            }
        }
    }
];

export function ClientProgress() {
    return (
        <Page>
            <TotalProgressCard chartData={chartData} />
            <ExerciseProgressCard chartData={chartData} />
        </Page>
    );
}
