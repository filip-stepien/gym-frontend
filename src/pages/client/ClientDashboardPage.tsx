import { Flex } from 'antd';
import { Page } from '@/components/layout/Page';
import { MembershipStatusCardWithData } from '@/components/cards/with-data/MembershipStatusCardWithData';
import { ProgressOverviewCardWithData } from '@/components/cards/with-data/ProgressOverviewCardWithData';
import { LastSessionCardWithData } from '@/components/cards/with-data/LastSessionCardWithData';
import { PublicSessionsCalendarCardWithData } from '@/components/cards/with-data/PublicSessionsCalendarCardWithData';
export function ClientDashboardPage() {
    return (
        <Page>
            <div className='bg-layout gap-small lg:gap-layout md:flex'>
                <Flex flex={1}>
                    <MembershipStatusCardWithData showDetails />
                </Flex>
                <Flex vertical className='gap-small lg:gap-layout pt-small w-full flex-2 md:pt-0'>
                    <ProgressOverviewCardWithData />
                    <LastSessionCardWithData />
                </Flex>
            </div>
            <PublicSessionsCalendarCardWithData />
        </Page>
    );
}
