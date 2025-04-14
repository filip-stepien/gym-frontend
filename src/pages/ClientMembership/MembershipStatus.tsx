import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { StatusBar } from './StatusBar';

export type MembershipStatusProps = {
    nextPaymentValue: string;
    nextPaymentPercent: number;
    validityValue: string;
    validityPercent: number;
};

export function MembershipStatus(props: MembershipStatusProps) {
    return (
        <Card className='flex-2'>
            <CardTitle title='Status' icon='status' />
            <StatusBar
                title='Next Payment'
                value={props.nextPaymentValue}
                percent={props.nextPaymentPercent}
            />
            <StatusBar
                title='Validity'
                value={props.validityValue}
                percent={props.validityPercent}
            />
        </Card>
    );
}
