import { Page } from '@/components/layout/Page';
import { TotalProgressCard } from '../../components/cards/TotalProgressCard';
import { ExerciseProgressCard } from '../../components/cards/ExerciseProgressCard';
import type { ChartData } from '@/components/common/Chart';

const totalProgressChartData: ChartData = {
    description: 'Total workout effort - last 3 months',
    data: [
        {
            title: 'Volume',
            timeSeries: {
                labels: ['1', '2', '3'],
                values: [1, 2, 3]
            }
        },
        {
            title: 'Sets',
            timeSeries: {
                labels: ['1', '2', '3'],
                values: [3, 4, 5]
            }
        }
    ]
};

const exerciseProgressChartData: ChartData = {
    description: 'Heaviest exercise weight - last 3 months',
    data: [
        {
            title: 'Bench press',
            timeSeries: {
                labels: ['1', '2', '3'],
                values: [6, 7, 4]
            }
        },
        {
            title: 'Deadlift',
            timeSeries: {
                labels: ['1', '2', '3'],
                values: [2, 8, 3]
            }
        }
    ]
};

export function ClientProgressPage() {
    return (
        <Page>
            <TotalProgressCard chartData={totalProgressChartData} />
            <ExerciseProgressCard chartData={exerciseProgressChartData} />
        </Page>
    );
}
