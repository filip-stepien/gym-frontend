import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { TrendStatistic } from '@/components/common/TrendStatistic';
import { useEffect, useState } from 'react';
import { getUserProgressOverview, ProgressOverviewDto } from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';
import { DataStateWrapper } from '../common/DataStateWrapper';

type ProgressOverviewCardProps = {
    weeklyTotalSets?: {
        value: number;
        trend: number;
    };
    weeklySessionVolume?: {
        value: number;
        trend: number;
    };
};

function getTrendDirection(trend?: number) {
    if (!trend || trend === 0) return 'flat';
    return trend > 0 ? 'up' : 'down';
}

function formatTrendString(trend?: number) {
    return trend ? trend + '%' : '-';
}

export function ProgressOverviewCard(props: ProgressOverviewCardProps) {
    const [stats, setStats] = useState<ProgressOverviewDto>();
    const [isLoading, setIsLoading] = useState(false);

    const userId = useUser().user?.id;
    // const { weeklyTotalSets, weeklySessionVolume } = props;

    useEffect(() => {
        const loadStats = async () => {
            if (!userId) return;

            try {
                setIsLoading(true);
                setStats((await getUserProgressOverview(userId)).data);
            } finally {
                setIsLoading(false);
            }
        };

        loadStats();
    }, [userId]);

    const showEmpty = !userId || !stats;

    return (
        <Card className='flex-1'>
            <CardTitle title='Progress Overview' icon='progress' />
            <div className='gap-large flex w-full flex-col sm:flex-row'>
                <DataStateWrapper isEmpty={showEmpty} isLoading={isLoading}>
                    <TrendStatistic
                        title='Weekly Total Sets'
                        value={stats?.weeklyTotalSets?.value ?? '-'}
                        trend={{
                            title: 'since last week',
                            value: formatTrendString(stats?.weeklyTotalSets?.trend),
                            direction: getTrendDirection(stats?.weeklyTotalSets?.trend)
                        }}
                    />
                    <TrendStatistic
                        title='Weekly Session Volume'
                        value={stats?.weeklySessionVolume?.value ?? '-'}
                        trend={{
                            title: 'since last week',
                            value: formatTrendString(stats?.weeklySessionVolume?.trend),
                            direction: getTrendDirection(stats?.weeklySessionVolume?.trend)
                        }}
                    />
                </DataStateWrapper>
            </div>
        </Card>
    );
}
