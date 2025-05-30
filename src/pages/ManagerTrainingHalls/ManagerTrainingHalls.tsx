import { Flex } from 'antd';
import { ManagerTrainingHallsTable } from './ManagerTrainingHallsTable';

export function ManagerTrainingHalls() {
    return (
        <Flex className='gap-layout'>
            <ManagerTrainingHallsTable />
        </Flex>
    );
}
