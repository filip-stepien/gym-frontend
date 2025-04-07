import { Card } from '../../components/Card';
import { Row, Statistic, Typography } from 'antd';
import { CardTitle } from '../../components/CardTitle';

export function ProgressOverview() {
    return (
        <Card>
            <CardTitle title='Progress Overview' icon='progress' />

            <Row justify={'space-between'} className='w-full'>
                <Statistic title='Weekly Total Sets' value={86} />
                <Statistic title='Weekly Session Volume' value='32,893 kg' />
            </Row>
            <Row justify={'space-between'} className='w-full'>
                <Row className='gap-3'>
                    <p className='text-neutral-6 text-md'>since last week</p>
                    <p className='text-md flex items-center text-green-400'>10%</p>
                </Row>
                {/*nie wiedzialem jak wyrownac te Trendy dlatego takie gapy dziwne*/}
                <Row className='gap-3.5'>
                    <p className='text-neutral-6 text-md'>since last week</p>
                    <p className='text-md flex items-center text-green-400'>12.5%</p>
                </Row>
            </Row>
        </Card>
    );
}
