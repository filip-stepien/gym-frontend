import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { TrendStatistic } from '@/components/common/TrendStatistic';
import { DataStateWrapper } from '../common/DataStateWrapper';

type ProgressOverviewCardProps = {
    weeklyTotalSets?: {
        value?: number;
        trend?: number;
    };
    weeklySessionVolume?: {
        value?: number;
        trend?: number;
    };
    isLoading?: boolean;
    isEmpty?: boolean;
};

function getTrendDirection(trend?: number) {
    if (!trend || trend === 0) return 'flat';
    return trend > 0 ? 'up' : 'down';
}

function formatTrendString(trend?: number) {
    return trend ? trend + '%' : '-';
}

export function ProgressOverviewCard(props: ProgressOverviewCardProps) {
    const { weeklyTotalSets, weeklySessionVolume, isLoading, isEmpty } = props;
    return (
        <Card className='flex-1'>
            <CardTitle title='Progress Overview' icon='progress' />
            <div className='gap-large flex w-full flex-col sm:flex-row'>
                <DataStateWrapper isEmpty={isEmpty} isLoading={isLoading}>
                    <TrendStatistic
                        title='Weekly Total Sets'
                        value={weeklyTotalSets?.value ?? '-'}
                        trend={{
                            title: 'since last week',
                            value: formatTrendString(weeklyTotalSets?.trend),
                            direction: getTrendDirection(weeklyTotalSets?.trend)
                        }}
                    />
                    <TrendStatistic
                        title='Weekly Session Volume'
                        value={weeklySessionVolume?.value ?? '-'}
                        trend={{
                            title: 'since last week',
                            value: formatTrendString(weeklySessionVolume?.trend),
                            direction: getTrendDirection(weeklySessionVolume?.trend)
                        }}
                    />
                </DataStateWrapper>
            </div>
        </Card>
    );
}
