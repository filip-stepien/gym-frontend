import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement
} from 'chart.js';
import { Empty, Flex, Typography } from 'antd';
import { Bar, Line } from 'react-chartjs-2';
import { getCSSVariable } from '@/utils/getCSSVariable';
import { useEffect, useState } from 'react';
import { SearchDropdown } from './SearchDropdown';
import { Dropdown } from './Dropdown';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement);

export type TimeSeriesData = {
    labels: string[];
    values: number[];
};

export type ChartData = {
    description: string;
    data: ChartEntry[];
};

export type ChartEntry = {
    title: string;
    timeSeries: TimeSeriesData;
};

type ChartProps = {
    chartData?: ChartData;
    dropdownType?: 'menu' | 'search';
    type?: 'bar' | 'line';
    className?: string;
};

const chartComponentOptions = {
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
    }
};

const { Text } = Typography;

export function Chart(props: ChartProps) {
    const { chartData, type, className, dropdownType } = props;

    const initialChartDataEntry = chartData?.data?.at(0);

    const [chartDataEntry, setChartDataEntry] = useState<ChartEntry | undefined>(
        initialChartDataEntry
    );

    useEffect(() => {
        setChartDataEntry(initialChartDataEntry);
    }, [initialChartDataEntry]);

    if (!chartData) {
        return <Empty />;
    }

    const menuItems = chartData.data.map(({ title }) => ({ key: title, label: title }));

    const dataExists =
        chartDataEntry &&
        chartDataEntry.timeSeries.labels.length > 0 &&
        chartDataEntry.timeSeries.values.length > 0;

    const chartComponentData = {
        labels: chartDataEntry?.timeSeries.labels,
        datasets: [
            {
                data: chartDataEntry?.timeSeries.values,
                backgroundColor: getCSSVariable('--color-primary')
            }
        ]
    };

    const handleMenuItemSelect = (item: { key: string; label: string }) => {
        const dataEntry = chartData.data.find(({ title }) => title === item.key);
        setChartDataEntry(dataEntry);
    };

    const menu =
        dropdownType === 'search' ? (
            <SearchDropdown
                placeholder={initialChartDataEntry?.title ?? 'Select'}
                menuItems={menuItems}
                onSelect={handleMenuItemSelect}
            />
        ) : (
            <Dropdown
                placeholder={initialChartDataEntry?.title ?? 'Select'}
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
        <Flex vertical>
            <Text className='text-font-secondary mb-middle'>{chartData.description}</Text>
            {menu}
            <div className={`pt-middle min-h-50 ${className}`}>
                {dataExists ? chart : <Empty />}
            </div>
        </Flex>
    );
}
