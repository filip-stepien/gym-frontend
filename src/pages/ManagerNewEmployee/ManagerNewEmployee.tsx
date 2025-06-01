import { BackButton } from '@/components/common/BackButton';
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
