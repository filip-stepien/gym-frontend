import { Flex } from 'antd';
import { EmployeeTrainingHallsTable } from './EmployeeTrainingHallsTable';

export function EmployeeTrainingHalls() {
    return (
        <Flex className='gap-layout'>
            <EmployeeTrainingHallsTable />
        </Flex>
    );
}
