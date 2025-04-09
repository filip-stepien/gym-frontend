import { TrendStatistic } from '../../components/TrendStatistic';
import { Card } from '../../components/Card';
import { CardTitle } from '../../components/CardTitle';
import { Flex, Space } from 'antd';
import { ChartData, Chart } from '../../components/Chart';

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
        <Card>
            <CardTitle title='Total Progress' icon='progress' />
            <Flex align='end' justify='space-between'>
                <Space size='large'>
                    <TrendStatistic
                        title='Total Sets'
                        value={428}
                        trend={{ title: 'since last week', value: '0%', direction: 'flat' }}
                    />
                    <TrendStatistic
                        title='Total Reps'
                        value={1253}
                        trend={{ title: 'since last week', value: '0%', direction: 'flat' }}
                    />
                    <TrendStatistic
                        title='Total Volume'
                        value='30,250 kg'
                        trend={{ title: 'since last week', value: '0%', direction: 'flat' }}
                    />
                </Space>
            </Flex>
            <Chart type='bar' data={chartData} />
        </Card>
    );
}
