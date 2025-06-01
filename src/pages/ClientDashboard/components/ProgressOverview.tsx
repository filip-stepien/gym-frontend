import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { TrendStatistic } from '@/components/TrendStatistic';

export function ProgressOverview() {
    return (
        <Card className='flex-1'>
            <CardTitle title='Progress Overview' icon='progress' />
            <div className='gap-large flex w-full flex-col sm:flex-row'>
                <TrendStatistic
                    title='Weekly Total Sets'
                    value={86}
                    trend={{ title: 'since last week', value: '10%', direction: 'up' }}
                />
                <TrendStatistic
                    title='Weekly Session Volume'
                    value='32,893 kg'
                    trend={{ title: 'since last week', value: '10%', direction: 'down' }}
                />
            </div>
        </Card>
    );
}
