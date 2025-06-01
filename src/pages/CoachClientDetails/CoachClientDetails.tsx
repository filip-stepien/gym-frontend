import { ExerciseProgressCard } from '@/components/cards/ExerciseProgressCard';
import { MembershipOverview } from '@/components/cards/PersonalDetailsCard';
import { TotalProgressCard } from '@/components/cards/TotalProgressCard';
import { Flex } from 'antd';
import { CoachClientLastWorkouts } from './CoachClientLastWorkouts';
import { BackButton } from '@/components/common/BackButton';
import type { ChartData } from '@/components/common/Chart';

const chartData: ChartData[] = [
    {
        category: 'Volume',
        timeSeries: {
            lastWeek: {
                labels: ['1', '2', '3'],
                values: [1, 2, 3]
            },
            lastThreeWeeks: {
                labels: ['1', '2', '3'],
                values: [3, 4, 5]
            },
            lastYear: {
                labels: ['1', '2', '3'],
                values: [6, 7, 8]
            }
        }
    },
    {
        category: 'Reps',
        timeSeries: {
            lastWeek: {
                labels: ['1', '2', '3'],
                values: [9, 10, 11]
            },
            lastThreeWeeks: {
                labels: ['1', '2', '3'],
                values: [12, 13, 14]
            },
            lastYear: {
                labels: ['1', '2', '3'],
                values: [15, 16, 17]
            }
        }
    }
];

export function CoachClientDetails() {
    return (
        <Flex vertical className='gap-small lg:gap-layout'>
            <div>
                <BackButton />
                <MembershipOverview
                    firstName='John'
                    lastName='Pork'
                    dateOfBirth='21.37.2137'
                    email='example@example.com'
                />
            </div>
            <TotalProgressCard chartData={chartData} />
            <ExerciseProgressCard chartData={chartData} />
            <CoachClientLastWorkouts />
        </Flex>
    );
}
