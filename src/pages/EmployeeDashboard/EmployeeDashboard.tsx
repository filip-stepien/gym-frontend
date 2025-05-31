import { Flex } from 'antd';
import { EmployeeDashboardMembershipCreation } from './EmployeeDashboardMembershipCreation';
import { EmployeeDashboardTasks } from './EmployeeDashboardTasks';

export function EmployeeDashboard() {
    return (
        <Flex vertical className='gap-small lg:gap-layout'>
            <EmployeeDashboardMembershipCreation />
            <EmployeeDashboardTasks />
        </Flex>
    );
}
