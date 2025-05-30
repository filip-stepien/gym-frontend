import { BackButton } from '@/components/BackButton';
import { ManagerNewHallCreation } from './ManagerNewHallCreation';
import { Flex } from 'antd';

export function ManagerNewHall() {
    return (
        <Flex vertical className='gap-layout'>
            <div>
                <BackButton />
                <ManagerNewHallCreation />
            </div>
        </Flex>
    );
}
