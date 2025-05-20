import { Flex } from 'antd';
import { Membership } from './Membership';
import { ProgressOverview } from './ProgressOverview';
import { UpcomingSession } from './UpcomingSession';
import { LastSession } from './LastSession';

export function ClientDashboard() {
    return (
        <Flex vertical className='gap-layout'>
            <Flex className='bg-layout gap-layout'>
                <Flex className='flex-1'>
                    <Membership />
                </Flex>
                <Flex vertical className='gap-layout w-full flex-2'>
                    <ProgressOverview />
                    <LastSession />
                </Flex>
            </Flex>
            <UpcomingSession />
        </Flex>
    );
}
