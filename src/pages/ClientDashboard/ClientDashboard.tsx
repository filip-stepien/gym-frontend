import { Flex } from 'antd';
import { Membership } from './Membership';
import { ProgressOverview } from './ProgressOverview';
import { LastSession } from './LastSession';
import { UpcomingSession } from './UpcomingSession';

export function ClientDashboard() {
    return (
        <Flex vertical className='gap-layout'>
            <Flex className='bg-layout gap-layout'>
                <Flex vertical className='gap-layout w-full'>
                    <ProgressOverview />
                    <Membership />
                </Flex>
                <Flex>
                    <LastSession />
                </Flex>
            </Flex>
            <UpcomingSession />
        </Flex>
    );
}
