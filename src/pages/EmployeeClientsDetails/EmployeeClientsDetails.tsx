import { Flex } from 'antd';
import { EmployeeClientsInfo } from './EmployeeClientsInfo';
import { BackButton } from '@/components/BackButton';
import { Membership } from '../ClientDashboard/Membership';
import { EmployeeClientsPayments } from './EmployeeClientsPayments';

export function EmployeeClientsDetails() {
    return (
        <Flex vertical className='gap-layout'>
            <BackButton />
            <Flex className='gap-layout'>
                <EmployeeClientsInfo />
                <Membership />
            </Flex>
            <EmployeeClientsPayments />
        </Flex>
    );
}
