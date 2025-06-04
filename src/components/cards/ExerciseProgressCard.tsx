import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Chart } from '@/components/common/Chart';
import type { ChartData } from '@/components/common/Chart';

type ExerciseProgressCardProps = {
    chartData?: ChartData;
};

export function ExerciseProgressCard({ chartData }: ExerciseProgressCardProps) {
    return (
        <Card>
            <CardTitle title='Exercise Progress' icon='progress' />
            <Chart type='line' chartData={chartData} dropdownType='search' />
        </Card>
    );
}
