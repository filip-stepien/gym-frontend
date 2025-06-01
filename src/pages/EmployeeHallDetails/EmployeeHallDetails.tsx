import { BackButton } from '@/components/common/BackButton';
import { EmployeeHallInfo } from './EmployeeHallInfo';
import { EmployeeHallDetailsMaintenance } from './EmployeeHallDetailsMaintenance';
import { Flex } from 'antd';

export function EmployeeHallDetails() {
    return (
        <div>
            <BackButton />
            <Flex vertical className='gap-small lg:gap-layout'>
                <EmployeeHallInfo />
                <EmployeeHallDetailsMaintenance />
            </Flex>
        </div>
    );
}
