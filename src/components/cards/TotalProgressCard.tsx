import { Flex } from 'antd';
import { TrendStatistic } from '@/components/common/TrendStatistic';
import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Chart } from '@/components/common/Chart';
import type { ChartData } from '@/components/common/Chart';

type TotalProgressCardProps = {
    chartData?: ChartData[];
};

export function TotalProgressCard({ chartData = [] }: TotalProgressCardProps) {
    return (
        <Card>
            <CardTitle title='Total Progress' icon='progress' />
            <Flex align='end' justify='space-between'>
                <div className='py-small gap-middle sm:gap-large flex flex-wrap'>
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
                </div>
            </Flex>
            <Chart type='bar' data={chartData} />
        </Card>
    );
}
