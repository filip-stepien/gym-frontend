import { BackButton } from '@/components/common/BackButton';
import { Flex } from 'antd';
import { EmployeeDetails } from './EmployeeDetails';

export function ManagerEmployeeDetails() {
    return (
        <Flex vertical className='gap-layout'>
            <div>
                <BackButton />
                <EmployeeDetails
                    firstName='John'
                    lastName='Pork'
                    dateOfBirth='21.02.2002'
                    email='email@email.com'
                    position='Manager'
                    phone='+1234567890'
                />
            </div>
        </Flex>
    );
}
