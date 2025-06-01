import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Chart } from '@/components/common/Chart';
import { TrendStatistic } from '@/components/common/TrendStatistic';
import type { ChartData } from '@/components/common/Chart';

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
