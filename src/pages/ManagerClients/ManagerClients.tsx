import { Flex } from 'antd';
import { ManagerClientsTable } from './ManagerClientsTable';

export function ManagerClients() {
    return (
        <Flex className='gap-layout w-full'>
            <ManagerClientsTable />
        </Flex>
    );
}
