import { Flex } from 'antd';
import { ClientWorkoutHistory } from './ClientWorkoutHistory';

export function ClientWorkout() {
    return (
        <Flex vertical className='gap-layout'>
            <ClientWorkoutHistory />
        </Flex>
    );
}
