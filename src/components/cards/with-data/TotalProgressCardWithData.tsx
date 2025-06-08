import { ChartDto, getUserTotalChartData } from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';
import { useState, useEffect } from 'react';
import { TotalProgressCard } from '../TotalProgressCard';

export function TotalProgressCardWithData() {
    const { user } = useUser();
    const [totalProgressChartData, setTotalProgressChartData] = useState<ChartDto>();

    useEffect(() => {
        async function getTotalProgressChartData() {
            if (!user?.id) return;
            const chartData = (await getUserTotalChartData(user.id)).data;
            setTotalProgressChartData(chartData);
        }

        getTotalProgressChartData();
    }, [user?.id]);

    return (
        <TotalProgressCard
            chartData={{
                description: 'Total workout effort - last 3 months',
                data:
                    totalProgressChartData?.data?.map(e => ({
                        title: e.title ?? '',
                        timeSeries: {
                            labels: e.timeSeries?.labels ?? [],
                            values: e.timeSeries?.values ?? []
                        }
                    })) ?? []
            }}
        />
    );
}
