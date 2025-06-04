import { ExerciseProgressCard } from '@/components/cards/ExerciseProgressCard';
import { PersonalDetailsCard } from '@/components/cards/PersonalDetailsCard';
import { TotalProgressCard } from '@/components/cards/TotalProgressCard';
import { Flex } from 'antd';
import { BackButton } from '@/components/layout/BackButton';
import { ChartData } from '@/components/common/Chart';

const personalDetailsCardData = {
    firstName: 'John',
    lastName: 'Pork',
    dateOfBirth: '21.37.2137',
    email: 'example@example.com'
};

const totalProgressChartData: ChartData = {
    description: 'Total workout effort - last 3 months',
    data: [
        {
            title: 'Volume',
            timeSeries: {
                labels: ['1', '2', '3'],
                values: [1, 2, 3]
            }
        },
        {
            title: 'Sets',
            timeSeries: {
                labels: ['1', '2', '3'],
                values: [3, 4, 5]
            }
        }
    ]
};

const exerciseProgressChartData: ChartData = {
    description: 'Heaviest exercise weight - last 3 months',
    data: [
        {
            title: 'Bench press',
            timeSeries: {
                labels: ['1', '2', '3'],
                values: [6, 7, 4]
            }
        },
        {
            title: 'Deadlift',
            timeSeries: {
                labels: ['1', '2', '3'],
                values: [2, 8, 3]
            }
        }
    ]
};

export function CoachClientDetailsPage() {
    return (
        <Flex vertical className='gap-small lg:gap-layout'>
            <div>
                <BackButton />
                <PersonalDetailsCard {...personalDetailsCardData} />
            </div>
            <TotalProgressCard chartData={totalProgressChartData} />
            <ExerciseProgressCard chartData={exerciseProgressChartData} />
        </Flex>
    );
}
