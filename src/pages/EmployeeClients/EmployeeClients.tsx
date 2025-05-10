import { Flex } from 'antd';
import { EmployeeClientsTable } from './EmployeeClientsTable';

export function EmployeeClients() {
    return (
        <Flex className='gap-layout w-full'>
            <EmployeeClientsTable />
        </Flex>
    );
}
