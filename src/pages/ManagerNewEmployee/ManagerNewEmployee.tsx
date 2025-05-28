import { BackButton } from '@/components/BackButton';
import { Flex } from 'antd';
import { ManagerEmployeeCreation } from './ManagerEmployeeCreation';

export function ManagerNewEmployee() {
    return (
        <Flex>
            <div>
                <BackButton />
                <ManagerEmployeeCreation />
            </div>
        </Flex>
    );
}
