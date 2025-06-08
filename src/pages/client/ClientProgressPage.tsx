import { Page } from '@/components/layout/Page';
import { TotalProgressCard } from '../../components/cards/TotalProgressCard';
import { ExerciseProgressCard } from '../../components/cards/ExerciseProgressCard';
import { useEffect, useState } from 'react';
import { ChartDto, getUserExerciseChartData, getUserTotalChartData } from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';

function getNullSafeChartData(chartData?: ChartDto) {
    return (
        chartData?.data?.map(e => ({
            title: e.title ?? '',
            timeSeries: {
                labels: e.timeSeries?.labels ?? [],
                values: e.timeSeries?.values ?? []
            }
        })) ?? []
    );
}

export function ClientProgressPage() {
    const { user } = useUser();
    const [totalProgressChartData, setTotalProgressChartData] = useState<ChartDto>();
    const [exerciseChartData, setExerciseChartData] = useState<ChartDto>();

    useEffect(() => {
        async function getTotalProgressChartData() {
            if (!user?.id) return;
            const chartData = (await getUserTotalChartData(user.id)).data;
            setTotalProgressChartData(chartData);
        }

        async function getExerciseChartData() {
            if (!user?.id) return;
            const chartData = (await getUserExerciseChartData(user.id)).data;
            setExerciseChartData(chartData);
        }

        getTotalProgressChartData();
        getExerciseChartData();
    }, [user?.id]);

    return (
        <Page>
            <TotalProgressCard
                chartData={{
                    description: 'Total workout effort - last 3 months',
                    data: getNullSafeChartData(totalProgressChartData)
                }}
            />
            <ExerciseProgressCard
                chartData={{
                    description: 'Heaviest exercise weight - last 3 months',
                    data: getNullSafeChartData(exerciseChartData)
                }}
            />
        </Page>
    );
}
