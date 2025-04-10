import { Flex } from 'antd';
import { CalendarCard } from './CalendarCard';
import { YourUpcomingSession } from './YourUpcomingSessions';

export function ClientSession() {
    return (
        <Flex vertical className='gap-layout'>
            <CalendarCard />
            <YourUpcomingSession />
        </Flex>
    );
}
