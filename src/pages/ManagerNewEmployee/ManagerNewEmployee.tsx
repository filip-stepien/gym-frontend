import { BackButton } from '@/components/BackButton';
import { Flex } from 'antd';
import { ManagaerEmployeeCreation } from './ManagerEmployeeCreation';

export function ManagerNewEmployee() {
    return (
        <Flex>
            <div>
                <BackButton />
                <ManagaerEmployeeCreation />
            </div>
        </Flex>
    );
}
