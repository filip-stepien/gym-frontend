import { Flex } from 'antd';
import { ManagerEmployeeCreation } from '../ManagerNewEmployee/ManagerEmployeeCreation';
import { EmployeeDashboardTasks } from '../EmployeeDashboard/EmployeeDashboardTasks';

export function ManagerDashboard() {
    return (
        <Flex vertical className='gap-layout'>
            <ManagerEmployeeCreation />
            <EmployeeDashboardTasks />
        </Flex>
    );
}
