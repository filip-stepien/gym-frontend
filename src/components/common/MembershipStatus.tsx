import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { StatusBar } from '@/components/common/StatusBar';

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
