import { Flex } from 'antd';
import { MembershipStatusCardWithData } from '@/components/cards/with-data/MembershipStatusCardWithData';
import { PersonalDetailsCardWithData } from '@/components/cards/with-data/PersonalDetailsCardWithData';

export function ClientMembershipPage() {
    return (
        <Flex className='gap-small lg:gap-layout flex-col lg:flex-row'>
            <PersonalDetailsCardWithData />
            <MembershipStatusCardWithData horizontal />
        </Flex>
    );
}
