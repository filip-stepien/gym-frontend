import { WorkoutDetailsCard } from '@/components/cards/WorkoutDetailsCard';
import dayjs from 'dayjs';

const workoutDetailsData = {
    title: 'New workout',
    timestamp: dayjs(),
    targetMuscles: ['bicep', 'tricep', 'chest'],
    exercises: [
        'Bench press',
        'Push up',
        'Lateral raise',
        'Pull up',
        'Bench press',
        'Push up',
        'Lateral raise',
        'Pull up'
    ],
    coach: 'John Pork',
    description: 'description'
};

export function ClientWorkoutDetailsPage() {
    return <WorkoutDetailsCard {...workoutDetailsData} />;
}
