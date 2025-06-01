import { WorkoutDetailsCard } from '@/components/cards/WorkoutDetailsCard';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';
import dayjs from 'dayjs';

// debug: get role from url
// get role from useUser hook in prod instead
const role = getRoleFromUrl();

const workoutDetailsCardData = {
    title: 'New workout',
    timestamp: dayjs(),
    targetMuscles: ['bicep', 'tricep', 'chest'],
    exercises: ['Bench press', 'Push up', 'Lateral raise', 'Pull up'],
    coach: {
        firstName: 'John',
        lastName: 'Pork'
    },
    // only coach should see which clients were present
    clients:
        role === 'coach'
            ? [
                  {
                      firstName: 'John',
                      lastName: 'Pork'
                  },
                  {
                      firstName: 'Bob',
                      lastName: 'Beef'
                  }
              ]
            : undefined,
    description: 'very long description'
};

export function WorkoutDetailsPage() {
    return <WorkoutDetailsCard {...workoutDetailsCardData} />;
}
