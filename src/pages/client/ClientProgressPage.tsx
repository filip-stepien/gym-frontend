import { Page } from '@/components/layout/Page';
import { TotalProgressCard } from '../../components/cards/TotalProgressCard';
import { ExerciseProgressCard } from '../../components/cards/ExerciseProgressCard';
import type { ChartData } from '@/components/common/Chart';

const totalProgressChartData: ChartData[] = [
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

const exerciseProgressChartData: ChartData[] = [
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

export function ClientProgressPage() {
    return (
        <Page>
            <TotalProgressCard chartData={totalProgressChartData} />
            <ExerciseProgressCard chartData={exerciseProgressChartData} />
        </Page>
    );
}
