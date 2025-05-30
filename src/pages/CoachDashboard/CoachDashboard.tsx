import { CoachLastSessions } from './CoachLastSessions';
import { Flex } from 'antd';
import { CoachUpcomingSessions } from './CoachUpcomingSessions';

export function CoachDashboard() {
    return (
        <Flex vertical className='gap-small lg:gap-layout'>
            <CoachLastSessions />
            <CoachUpcomingSessions />
        </Flex>
    );
}
