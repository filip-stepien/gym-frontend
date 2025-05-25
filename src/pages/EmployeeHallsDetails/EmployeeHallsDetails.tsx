import { BackButton } from '@/components/BackButton';
import { Flex } from 'antd';
import { EmployeeScheduledSessions } from './EmployeeScheduledSessions';
import { EmployeeHallsInformation } from './EmployeeHallsInformation';

export function EmployeeHallsDetails() {
    return (
        <Flex vertical className='gap-layout'>
            <BackButton />
            <EmployeeHallsInformation />
            <EmployeeScheduledSessions />
        </Flex>
    );
}
