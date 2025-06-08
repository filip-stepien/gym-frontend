import {
    addWorkoutSessionAttendant,
    addWorkoutSessionExercise,
    createWorkoutSession,
    listExercises
} from '@/generated/gym-api';
import { useState, useEffect } from 'react';
import { NewWorkoutCard, NewWorkoutData } from '../NewWorkoutCard';
import dayjs from 'dayjs';
import { useUser } from '@/hooks/useUser';

export function NewWorkoutCardWithData() {
    const { user } = useUser();
    const [exerciseOptions, setExerciseOptions] = useState<string[]>([]);
    const [saveError, setSaveError] = useState(false);

    useEffect(() => {
        async function getExercises() {
            const exercises = (await listExercises()).data.content
                ?.filter(e => e !== undefined)
                .map(e => e.name)
                .filter(name => name !== undefined);

            setExerciseOptions(exercises ?? []);
        }

        getExercises();
    }, []);

    const handleWorkoutSave = async (workoutData: NewWorkoutData) => {
        if (!user?.id) return;
        setSaveError(false);

        try {
            const newSession = await createWorkoutSession({
                title: workoutData.title,
                date: dayjs().format('YYYY-MM-DD'),
                description: 'Personal session.',
                hallUuid: undefined as unknown as string,
                coachUuid: undefined as unknown as string
            });

            const sessionId = newSession.data.uuid;
            if (!sessionId) {
                throw new Error('New session UUID not present.');
            }

            const predefinedExercises = (await listExercises()).data.content;
            if (!predefinedExercises) {
                throw new Error('No predefined exercises found.');
            }

            await addWorkoutSessionAttendant(sessionId, { userUuid: user.id });

            const exercisePromises = workoutData.exerciseRows.map((row, i) => {
                const exerciseId = predefinedExercises.find(
                    exercise => exercise.name === row.exercise
                )?.uuid;

                if (!exerciseId) {
                    throw new Error(`Exercise "${row.exercise}" not found.`);
                }

                return addWorkoutSessionExercise(sessionId, {
                    exerciseOrder: i,
                    exerciseUuid: exerciseId,
                    reps: Number(row.reps),
                    weight: Number(row.weight)
                });
            });

            await Promise.all(exercisePromises);
        } catch (e) {
            console.error('Error while trying to save a new workout', e);
            setSaveError(true);
        }
    };

    return (
        <NewWorkoutCard
            exerciseSearchOptions={exerciseOptions}
            onWorkoutSave={handleWorkoutSave}
            errorMessage={
                saveError ? 'Your last workout was not saved properly. Try again later.' : undefined
            }
        />
    );
}
