import { Space } from 'antd';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Chart } from '@/components/Chart';
import { TrendStatistic } from '@/components/TrendStatistic';
import type { ChartData } from '@/components/Chart';

const chartData: ChartData[] = [
    {
        category: 'Bench Press',
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
        category: 'Push Ups',
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
            <Space size='large' className='py-small'>
                <TrendStatistic title='Heaviest Weight' value='90 kg' />
                <TrendStatistic title='Best Set Volume' value='800 kg' />
                <TrendStatistic title='Best Session Volume' value='2500 kg' />
            </Space>
            <Chart
                type='line'
                data={chartData}
                categorySearch={{ enabled: true, placeholder: 'Search exercise...' }}
            />
        </Card>
    );
}
