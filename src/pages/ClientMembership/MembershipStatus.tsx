import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { StatusBar } from './StatusBar';

export function MembershipStatus() {
    return (
        <Card className='flex-2'>
            <CardTitle title='Status' icon='status' />
            <StatusBar title='Next Payment' value='3 days left' percent={60} />
            <StatusBar title='Validity' value='12 days left' percent={30} />
        </Card>
    );
}
