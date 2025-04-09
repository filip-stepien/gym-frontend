import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement
} from 'chart.js';
import { Dropdown, Flex, Space } from 'antd';
import { Icon } from './Icon';
import { Bar, Line } from 'react-chartjs-2';
import { getCSSVariable } from '@/utils/getCSSVariable';
import { useState } from 'react';
import type { MenuProps } from 'antd';

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

type ChartProps = {
    data: ChartData[];
    type?: 'bar' | 'line';
    className?: string;
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
    const { data, type, className } = props;
    const initialTimePeriod: TimePeriod = 'lastWeek';

    const [chartDataset, setChartDataset] = useState(data[0]);
    const [timePeriodLabel, setTimePeriodLabel] = useState(timeSpanLabels[initialTimePeriod]);
    const [timeSeriesData, setTimeSeriesData] = useState(
        chartDataset.timeSeries[initialTimePeriod]
    );

    const handleCategoryClick: MenuProps['onClick'] = option => {
        // categories are created based on provided datasets, thus find cannot return undefined
        const dataset = data.find(e => e.category == option.key) as ChartData;
        const timeSeries = dataset.timeSeries[initialTimePeriod];

        setChartDataset(dataset);
        setTimePeriodLabel(timeSpanLabels[initialTimePeriod]);
        setTimeSeriesData(timeSeries);
    };

    const handleTimePeriodClick: MenuProps['onClick'] = option => {
        // key type of timeSpanLabels is TimePeriod, but Object.entries() returns key as a string
        const timePeriod = option.key as TimePeriod;
        const timeSeries = chartDataset.timeSeries[timePeriod];

        setTimePeriodLabel(timeSpanLabels[timePeriod]);
        setTimeSeriesData(timeSeries);
    };

    const categoryDropDownItems: MenuProps['items'] = data.map(({ category }) => ({
        label: category,
        key: category,
        onClick: handleCategoryClick
    }));

    const timePeriodDropDownItems: MenuProps['items'] = Object.entries(timeSpanLabels).map(
        ([timespan, title]) => ({
            label: title,
            key: timespan,
            onClick: handleTimePeriodClick
        })
    );

    const chartComponentData = {
        labels: timeSeriesData.labels,
        datasets: [
            {
                data: timeSeriesData.values,
                backgroundColor: getCSSVariable('--color-primary')
            }
        ]
    };

    return (
        <Space direction='vertical' size='middle' className='pt-small'>
            <Flex align='end' justify='space-between'>
                <Dropdown.Button
                    icon={<Icon icon='down' />}
                    menu={{ items: categoryDropDownItems }}
                    className='w-fit'
                >
                    {chartDataset.category}
                </Dropdown.Button>
                <Dropdown className='select-none' menu={{ items: timePeriodDropDownItems }}>
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            <span>{timePeriodLabel}</span>
                            <Icon icon='dropdown' />
                        </Space>
                    </a>
                </Dropdown>
            </Flex>
            <div className={`min-h-50 ${className}`}>
                {type === 'line' ? (
                    <Bar options={chartComponentOptions} data={chartComponentData} />
                ) : (
                    <Line options={chartComponentOptions} data={chartComponentData} />
                )}
            </div>
        </Space>
    );
}
