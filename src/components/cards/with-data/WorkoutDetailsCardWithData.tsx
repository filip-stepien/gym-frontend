import { useEffect, useState } from 'react';
import { WorkoutDetailsCard } from '../WorkoutDetailsCard';
import { getWorkoutSession, WorkoutSessionDto } from '@/generated/gym-api';
import dayjs from 'dayjs';
import { useParams } from 'react-router';
import { useUser } from '@/hooks/useUser';

export function WorkoutDetailsCardWithData() {
    const { user } = useUser();
    const { id } = useParams();
    const [workout, setWorkout] = useState<WorkoutSessionDto>();

    useEffect(() => {
        async function getWorkout() {
            if (!id) return;
            const workoutData = (await getWorkoutSession(id)).data;
            setWorkout(workoutData);
        }

        getWorkout();
    }, [id]);

    return (
        <WorkoutDetailsCard
            title={workout?.title}
            timestamp={dayjs(workout?.date)}
            description={workout?.description}
            clients={
                user?.role === 'coach'
                    ? workout?.attendants?.map(a => ({
                          firstName: a.firstName,
                          lastName: a.lastName
                      }))
                    : undefined
            }
            coach={
                workout?.coach && {
                    firstName: workout.coach.firstName,
                    lastName: workout.coach.lastName
                }
            }
            exercises={workout?.exercises
                ?.sort((a, b) => (a.exerciseOrder ?? 0) - (b.exerciseOrder ?? 0))
                .map(e => e.exercise?.name ?? 'Unnamed exercise')}
            targetMuscles={[
                ...new Set(
                    workout?.exercises
                        ?.flatMap(e => e.exercise?.targetMuscles)
                        .map(e => e?.name ?? 'Unnamed muscle')
                )
            ]}
        />
    );
}
