import { Space } from 'antd';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Chart } from '@/components/Chart';
import { TrendStatistic } from '@/components/TrendStatistic';
import type { ChartData } from '@/components/Chart';

type ExerciseProgressCardProps = {
    chartData?: ChartData[];
};

export function ExerciseProgressCard({ chartData = [] }: ExerciseProgressCardProps) {
    return (
        <Card>
            <CardTitle title='Exercise Progress' icon='progress' />
            <div className='py-small gap-middle sm:gap-large flex flex-wrap'>
                <TrendStatistic title='Heaviest Weight' value='90 kg' />
                <TrendStatistic title='Best Set Volume' value='800 kg' />
                <TrendStatistic title='Best Session Volume' value='2500 kg' />
            </div>
            <Chart
                type='line'
                data={chartData}
                categorySearch={{ enabled: true, placeholder: 'Search exercise...' }}
            />
        </Card>
    );
}
