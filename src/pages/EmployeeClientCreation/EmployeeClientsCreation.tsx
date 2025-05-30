import { BackButton } from '@/components/BackButton';
import { Flex } from 'antd';
import { EmployeeDashboardMembershipCreation } from '../EmployeeDashboard/EmployeeDashboardMembershipCreation';

export function EmployeeClientsCreation() {
    return (
        <Flex vertical className='gap-layout'>
            <div>
                <BackButton />
                <EmployeeDashboardMembershipCreation />
            </div>
        </Flex>
    );
}
