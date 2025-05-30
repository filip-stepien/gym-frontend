import { Page } from '@/components/Page';
import { MembershipOverview } from '@/components/MembershipOverview';
import { MembershipStatus } from './MembershipStatus';
import { MembershipDetails } from './MembershipDetails';
import dayjs from 'dayjs';

export function ClientMembership() {
    return (
        <Page>
            <div className='gap-small lg:gap-layout flex flex-col md:flex-row'>
                <MembershipOverview
                    firstName='John'
                    lastName='Pork'
                    dateOfBirth='21.02.2002'
                    email='email@email.com'
                />
                <MembershipStatus
                    nextPaymentValue='3 days left'
                    nextPaymentPercent={20}
                    validityValue='12 days left'
                    validityPercent={60}
                />
            </div>
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
