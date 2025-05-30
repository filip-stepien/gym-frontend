import { BackButton } from '@/components/BackButton';
import { Flex } from 'antd';
import { Membership } from '../ClientDashboard/Membership';
import { EmployeeClientsInfo } from '../EmployeeClientsDetails/EmployeeClientsInfo';
import { EmployeeClientsPayments } from '../EmployeeClientsDetails/EmployeeClientsPayments';

export function ManagerClientDetails() {
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
