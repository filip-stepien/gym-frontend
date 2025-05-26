import { Flex } from 'antd';
import { ManagerEmployeeTable } from './ManagerEmployeeTable';

export function ManagerEmployees() {
    return (
        <Flex className='gap-layout w-full'>
            <ManagerEmployeeTable />
        </Flex>
    );
}
