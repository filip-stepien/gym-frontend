import { Space, Statistic } from 'antd';
import { BottomTrend } from './BottomTrend';
import type { TrendDirection } from './BottomTrend';
import type { valueType } from 'antd/es/statistic/utils';

type TrendStatisticProps = {
    title: string;
    value: valueType;
    trend?: {
        title: string;
        value: valueType;
        direction: TrendDirection;
    };
};

export function TrendStatistic(props: TrendStatisticProps) {
    const { title, value, trend } = props;

    return (
        <Space direction='vertical'>
            <Statistic title={title} value={value} />
            {trend && (
                <BottomTrend title={trend.title} value={trend.value} direction={trend.direction} />
            )}
        </Space>
    );
}
