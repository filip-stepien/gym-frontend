import { WorkoutDetailsCard } from '@/components/cards/WorkoutDetailsCard';
import dayjs from 'dayjs';

const workoutDetails = {
    title: 'New workout',
    timestamp: dayjs(),
    targetMuscles: ['bicep', 'tricep', 'chest'],
    exercises: ['Bench press', 'Push up', 'Lateral raise', 'Pull up'],
    coach: 'John Pork',
    clients: [
        {
            id: '1',
            firstName: 'John',
            lastName: 'Pork'
        },
        {
            id: '2',
            firstName: 'Bob',
            lastName: 'Beef'
        }
    ],
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nunc, gravida id nisi sed, pulvinar euismod tortor. Nam nec venenatis purus, at maximus mi. Duis aliquam nibh interdum, accumsan mi non, pharetra ipsum. Proin porta non dui et blandit.'
};

export function CoachWorkoutDetails() {
    return (
        <WorkoutDetailsCard
            title={workoutDetails.title}
            timestamp={workoutDetails.timestamp}
            targetMuscles={workoutDetails.targetMuscles}
            exercises={workoutDetails.exercises}
            clients={workoutDetails.clients}
            coach={workoutDetails.coach}
            description={workoutDetails.description}
        />
    );
}
