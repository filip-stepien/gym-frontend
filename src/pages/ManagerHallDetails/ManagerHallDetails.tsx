import { BackButton } from '@/components/BackButton';
import { Flex } from 'antd';
import { ManagerHallsInformation } from './ManagerHallsInformation';
import { ManagerScheduledSessions } from './ManagerScheduledSessions';

export function ManagerHallDetails() {
    return (
        <Flex vertical className='gap-layout'>
            <BackButton />
            <ManagerHallsInformation
                id={123}
                halltype='Yoga'
                status='Available'
                description='This hall is primarily used for yoga and meditation classes.'
            />

            <ManagerScheduledSessions />
        </Flex>
    );
}
