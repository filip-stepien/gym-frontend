import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement
} from 'chart.js';
import { Flex, Space } from 'antd';
import { Bar, Line } from 'react-chartjs-2';
import { getCSSVariable } from '@/utils/getCSSVariable';
import { ChangeEventHandler, useState } from 'react';
import { SearchDropdown } from './SearchDropdown';
import { Dropdown } from './Dropdown';
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

export type CategorySearchOptions = {
    enabled?: boolean;
    placeholder?: string;
    limit?: number;
};

type ChartProps = {
    data: ChartData[];
    type?: 'bar' | 'line';
    className?: string;
    categorySearch?: CategorySearchOptions;
};

type TimeSpanLabels = Record<TimePeriod, string>;

function getCategoryItems(data: ChartData[], onClick: MenuProps['onClick'], limit?: number) {
    return data
        .map(({ category }) => ({
            label: category,
            key: category,
            onClick
        }))
        .slice(0, limit);
}

function getTimePeriodItems(timeSpanLabels: TimeSpanLabels, onClick: MenuProps['onClick']) {
    return Object.entries(timeSpanLabels).map(([timespan, title]) => ({
        label: title,
        key: timespan,
        onClick: onClick
    }));
}

function categorySearchComparator(category: string, prompt: string) {
    return category.toLowerCase().startsWith(prompt.toLowerCase());
}

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
    const { data, type, className, categorySearch } = props;

    // this handler is used in the state initialization so all handlers are declared on the top
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

    const handleSearch: ChangeEventHandler<HTMLInputElement> = event => {
        const text = event.target.value;
        const searchResult = data.filter(({ category }) =>
            categorySearchComparator(category, text)
        );

        const items = getCategoryItems(searchResult, handleCategoryClick, categorySearch?.limit);
        setCategoryItems(items);
    };

    // actual state declarations
    const initialTimePeriod: TimePeriod = 'lastWeek';
    const initialCategoryItems = getCategoryItems(data, handleCategoryClick, categorySearch?.limit);

    const [categoryItems, setCategoryItems] = useState(initialCategoryItems);
    const [chartDataset, setChartDataset] = useState(data[0]);
    const [timePeriodLabel, setTimePeriodLabel] = useState(timeSpanLabels[initialTimePeriod]);
    const [timeSeriesData, setTimeSeriesData] = useState(
        chartDataset.timeSeries[initialTimePeriod]
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
                <SearchDropdown
                    category={chartDataset.category}
                    menuItems={categoryItems}
                    searchEnabled={categorySearch?.enabled}
                    searchPlaceholder={categorySearch?.placeholder}
                    onSearchChange={handleSearch}
                />
                <Dropdown
                    menuItems={getTimePeriodItems(timeSpanLabels, handleTimePeriodClick)}
                    label={timePeriodLabel}
                />
            </Flex>
            <div className={`min-h-50 ${className}`}>
                {type === 'line' ? (
                    <Line options={chartComponentOptions} data={chartComponentData} />
                ) : (
                    <Bar options={chartComponentOptions} data={chartComponentData} />
                )}
            </div>
        </Space>
    );
}
