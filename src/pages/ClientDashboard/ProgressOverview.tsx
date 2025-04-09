import { Row } from 'antd';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { TrendStatistic } from '@/components/TrendStatistic';

export function ProgressOverview() {
    return (
        <Card>
            <CardTitle title='Progress Overview' icon='progress' />
            <Row justify='space-between' className='w-full'>
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
            </Row>

            {/* wywaliłem te trendy do oddzielnego komponentu
                i teraz jest po prostu props "trend"
                zostawiam stare żebyś sobie ewentualnie porównał czy coś xd
                jak przeczytasz to możesz to usunąć */}

            {/* <Row justify={'space-between'} className='w-full'>
                <Row className='gap-3'>
                    <p className='text-neutral-6 text-md'>since last week</p>
                    <p className='text-md flex items-center text-green-400'>10%</p>
                </Row>
                nie wiedzialem jak wyrownac te Trendy dlatego takie gapy dziwne
                <Row className='gap-3.5'>
                    <p className='text-neutral-6 text-md'>since last week</p>
                    <p className='text-md flex items-center text-green-400'>12.5%</p>
                </Row>
            </Row> */}
        </Card>
    );
}
