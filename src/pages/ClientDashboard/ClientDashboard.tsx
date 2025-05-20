import { Flex } from 'antd';
import { Membership } from './Membership';
import { ProgressOverview } from './ProgressOverview';
import { LastSession } from '../../components/LastSession';
import { UpcomingSession } from './UpcomingSession';

const tags = ['chest', 'shoulders'];

const exercises = [
    'Bent Over Row',
    'Bicep Curl',
    'Bench Press',
    'Deadlift',
    'Tricep Extension',
    'e',
    'a'
];

const coach = 'John Pork';

export function ClientDashboard() {
    return (
        <Flex vertical className='gap-layout'>
            <Flex className='bg-layout gap-layout'>
                <Flex className='flex-1'>
                    <Membership />
                </Flex>
                <Flex vertical className='gap-layout w-full flex-2'>
                    <ProgressOverview />
                    <LastSession tags={tags} exercises={exercises} coach={coach} />
                </Flex>
            </Flex>
            <UpcomingSession />
        </Flex>
    );
}
