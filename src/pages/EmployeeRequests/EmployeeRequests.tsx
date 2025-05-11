import { Flex } from 'antd';
import { EmployeeRequestsTable } from './EmployeeRequestsTable';

export function EmployeeRequests() {
    return (
        <Flex className='gap-layout w-full'>
            <EmployeeRequestsTable />
        </Flex>
    );
}
