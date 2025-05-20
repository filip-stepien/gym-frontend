import { Page } from '@/components/Page';
import { MembershipOverview } from '@/components/MembershipOverview';
import { Flex } from 'antd';
import { MembershipStatus } from './MembershipStatus';
import { MembershipDetails } from './MembershipDetails';
import dayjs from 'dayjs';

export function ClientMembership() {
    return (
        <Page>
            <Flex className='gap-layout'>
                <MembershipOverview
                    firstName='John'
                    lastName='Pork'
                    dateOfBirth='21.02.2002'
                    email='email@email.com'
                    imageSrc='https://picsum.photos/200/300'
                />
                <MembershipStatus
                    nextPaymentValue='3 days left'
                    nextPaymentPercent={20}
                    validityValue='12 days left'
                    validityPercent={60}
                />
            </Flex>
            <MembershipDetails
                active
                type='Standard'
                paymentMethod='MasterCard **** **** **** 1234'
                joinDate={dayjs()}
                validUntil={dayjs()}
                lastPayment={dayjs()}
            />
        </Page>
    );
}
