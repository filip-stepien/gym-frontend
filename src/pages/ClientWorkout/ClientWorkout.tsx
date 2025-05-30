import { Flex } from 'antd';
import { ClientWorkoutHistory } from './ClientWorkoutHistory';
import { ClientNewWorkout } from './ClientNewWorkout';

export function ClientWorkout() {
    return (
        <Flex vertical className='gap-small lg:gap-layout'>
            <ClientWorkoutHistory />
            <ClientNewWorkout />
        </Flex>
    );
}
