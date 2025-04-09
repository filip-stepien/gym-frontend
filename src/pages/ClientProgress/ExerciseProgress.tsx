import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Chart } from '@/components/Chart';
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

export function ExerciseProgress() {
    return (
        <Card>
            <CardTitle title='Exercise Progress' icon='progress' />
            <Chart data={chartData} />
        </Card>
    );
}
