import { ChartDto, getUserExerciseChartData } from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';
import { useState, useEffect } from 'react';
import { ExerciseProgressCard } from '../ExerciseProgressCard';

export function ExerciseProgressCardWithData() {
    const { user } = useUser();
    const [exerciseChartData, setExerciseChartData] = useState<ChartDto>();

    useEffect(() => {
        async function getExerciseChartData() {
            if (!user?.id) return;
            const chartData = (await getUserExerciseChartData(user.id)).data;
            setExerciseChartData(chartData);
        }

        getExerciseChartData();
    }, [user?.id]);

    return (
        <ExerciseProgressCard
            chartData={{
                description: 'Heaviest exercise weight - last 3 months',
                data:
                    exerciseChartData?.data?.map(e => ({
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
