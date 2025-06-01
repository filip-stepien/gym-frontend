import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement
} from 'chart.js';
import { Empty, Flex, Space } from 'antd';
import { Bar, Line } from 'react-chartjs-2';
import { getCSSVariable } from '@/utils/getCSSVariable';
import { useState } from 'react';
import { SearchDropdown } from './SearchDropdown';
import { Dropdown } from './Dropdown';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement);

export type TimePeriod = 'lastWeek' | 'lastThreeWeeks' | 'lastYear';

export type TimeSeriesData = {
    labels: string[];
    values: number[];
};

export type ChartData = {
    category: string;
    timeSeries: Record<TimePeriod, TimeSeriesData>;
};

export type CategorySearchOptions = {
    enabled?: boolean;
    placeholder?: string;
    limit?: number;
};

type ChartProps = {
    data: ChartData[];
    dropdownType?: 'menu' | 'search';
    type?: 'bar' | 'line';
    className?: string;
    categorySearch?: CategorySearchOptions;
};

type TimeSpanLabels = Record<TimePeriod, string>;

const timeSpanLabels: TimeSpanLabels = {
    lastWeek: 'Last week',
    lastThreeWeeks: 'Last 3 weeks',
    lastYear: 'Last year'
};

const chartComponentOptions = {
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
    }
};

export function Chart(props: ChartProps) {
    const { data, type, className, dropdownType } = props;

    const initialTimePeriod: TimePeriod = 'lastWeek';
    const [chartDataset, setChartDataset] = useState<ChartData | null>(data[0]);
    const [timePeriod, setTimePeriod] = useState<TimePeriod>(initialTimePeriod);

    const dataExists = data[0]?.category.length > 0;
    const menuItems = data.map(e => ({ key: e.category, label: e.category }));
    const timeSeriesItems = Object.entries(timeSpanLabels).map(([key, value]) => ({
        key,
        label: value
    }));

    const chartComponentData = {
        labels: chartDataset?.timeSeries[timePeriod].labels,
        datasets: [
            {
                data: chartDataset?.timeSeries[timePeriod].values,
                backgroundColor: getCSSVariable('--color-primary')
            }
        ]
    };

    const handleMenuItemSelect = (item: { key: string; label: string }) => {
        const dataset = data.find(e => e.category === item.key) ?? null;
        setChartDataset(dataset);
    };

    const handleTimePeriodSelect = (item: { key: string; label: string }) => {
        setTimePeriod(item.key as TimePeriod);
    };

    const menu =
        dropdownType === 'search' ? (
            <SearchDropdown
                placeholder={data[0]?.category ?? 'Select exercise'}
                menuItems={menuItems}
                onSelect={handleMenuItemSelect}
            />
        ) : (
            <Dropdown
                placeholder={data[0]?.category ?? 'Select exercise'}
                menuItems={menuItems}
                onSelect={handleMenuItemSelect}
            />
        );

    const chart =
        type === 'line' ? (
            <Line options={chartComponentOptions} data={chartComponentData} />
        ) : (
            <Bar options={chartComponentOptions} data={chartComponentData} />
        );

    return (
        <Space direction='vertical' size='middle' className='pt-small'>
            <Flex align='end' justify='space-between'>
                {dataExists && (
                    <>
                        {menu}
                        <Dropdown
                            menuItems={timeSeriesItems}
                            placeholder={timeSpanLabels[initialTimePeriod]}
                            onSelect={handleTimePeriodSelect}
                        />
                    </>
                )}
            </Flex>
            <div className={`min-h-50 ${className}`}>{dataExists ? chart : <Empty />}</div>
        </Space>
    );
}
