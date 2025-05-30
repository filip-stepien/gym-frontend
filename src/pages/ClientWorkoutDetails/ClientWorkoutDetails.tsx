import { WorkoutDetailsCard } from '@/components/WorkoutDetailsCard';
import dayjs from 'dayjs';

const workoutDetails = {
    title: 'New workout',
    timestamp: dayjs(),
    targetMuscles: ['bicep', 'tricep', 'chest'],
    exercises: ['Bench press', 'Push up', 'Lateral raise', 'Pull up'],
    coach: 'John Pork',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nunc, gravida id nisi sed, pulvinar euismod tortor. Nam nec venenatis purus, at maximus mi. Duis aliquam nibh interdum, accumsan mi non, pharetra ipsum. Proin porta non dui et blandit.'
};

export function ClientWorkoutDetails() {
    return (
        <WorkoutDetailsCard
            title={workoutDetails.title}
            timestamp={workoutDetails.timestamp}
            targetMuscles={workoutDetails.targetMuscles}
            exercises={workoutDetails.exercises}
            coach={workoutDetails.coach}
            description={workoutDetails.description}
        />
    );
}
