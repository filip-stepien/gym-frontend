import { Flex } from 'antd';
import { Membership } from './Membership';
import { ProgressOverview } from './ProgressOverview';

export function ClientDashboard() {
    return (
        // clean 🔥
        <Flex className='bg-layout gap-layout flex-col'>
            <ProgressOverview />
            <Membership />
        </Flex>
    );
}
