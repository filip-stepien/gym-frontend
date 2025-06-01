import { Flex } from 'antd';
import { Membership } from './components/Membership';
import { ProgressOverview } from './components/ProgressOverview';
import { UpcomingSession } from './components/UpcomingSession';
import { LastSession } from './components/LastSession';
import { Page } from '@/components/Page';

export function ClientDashboard() {
    return (
        <Page>
            <div className='bg-layout gap-small lg:gap-layout md:flex'>
                <Flex className='flex-1'>
                    <Membership />
                </Flex>
                <Flex vertical className='gap-small lg:gap-layout pt-small w-full flex-2 md:pt-0'>
                    <ProgressOverview />
                    <LastSession />
                </Flex>
            </div>
            <UpcomingSession />
        </Page>
    );
}
