import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Chart } from '@/components/common/Chart';
import type { ChartData } from '@/components/common/Chart';

type TotalProgressCardProps = {
    chartData?: ChartData;
};

export function TotalProgressCard({ chartData }: TotalProgressCardProps) {
    return (
        <Card>
            <CardTitle title='Total Progress' icon='progress' />
            <Chart type='bar' chartData={chartData} />
        </Card>
    );
}
