import { Flex } from 'antd';
import { Membership } from './Membership';
import { ProgressOverview } from './ProgressOverview';
import { UpcomingSession } from './UpcomingSession';
import { LastSession } from './LastSession';

export function ClientDashboard() {
    return (
        <Flex vertical className='gap-small md:gap-layout'>
            <div className='bg-layout gap-small md:gap-layout md:flex'>
                <Flex className='flex-1'>
                    <Membership />
                </Flex>
                <Flex vertical className='gap-small md:gap-layout pt-small w-full flex-2 md:pt-0'>
                    <ProgressOverview />
                    <LastSession />
                </Flex>
            </div>
            <UpcomingSession />
        </Flex>
    );
}
