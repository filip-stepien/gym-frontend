import { Page } from '@/components/Page';
import { MembershipOverview } from './MembershipOverwiev';
import { Flex } from 'antd';
import { MembershipStatus } from './MembershipStatus';

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
                <MembershipStatus />
            </Flex>
        </Page>
    );
}
