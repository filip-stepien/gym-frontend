import { useState, useEffect } from 'react';
import { NewSessionCard, type NewSessionValues } from '../NewSessionCard';
import {
    createWorkoutSession,
    addWorkoutSessionExercise,
    listExercises,
    listHalls
} from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';

export function NewSessionCardWithData() {
    const { user } = useUser();
    const [exerciseOptions, setExerciseOptions] = useState<string[]>([]);
    const [trainingHallNumbers, setTrainingHallNumbers] = useState<string[]>([]);
    const [saveError, setSaveError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const exercisesResponse = await listExercises();
                const exercises = exercisesResponse.data.content
                    ?.filter(e => e !== undefined)
                    .map(e => e.name)
                    .filter(name => name !== undefined);
                setExerciseOptions(exercises ?? []);

                const hallsResponse = await listHalls();
                const halls = hallsResponse.data.content
                    ?.filter(h => h !== undefined)
                    .map(h => h.hallName)
                    .filter(name => name !== undefined);
                setTrainingHallNumbers(halls ?? []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const handleCreate = async (values: NewSessionValues) => {
        if (!user?.id) return;
        setSaveError(false);

        try {
            const hallsResponse = await listHalls();
            const selectedHall = hallsResponse.data.content?.find(
                h => h.hallName === values.hall
            );

            if (!selectedHall?.uuid) {
                throw new Error(`Hall "${values.hall}" not found.`);
            }

            const newSession = await createWorkoutSession({
                title: values.title,
                description: values.description,
                date: values.date.format('YYYY-MM-DD'),
                hallUuid: selectedHall.uuid,
                coachUuid: user.id
            });

            const sessionId = newSession.data.uuid;
            if (!sessionId) {
                throw new Error('New session UUID not present.');
            }

            const exercisesResponse = await listExercises();
            const predefinedExercises = exercisesResponse.data.content;
            if (!predefinedExercises) {
                throw new Error('No predefined exercises found.');
            }

            const exercisePromises = values.exerciseRows.map((row, i) => {
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

            console.log('Session created successfully');
            
        } catch (error) {
            console.error('Error while trying to create a new session:', error);
            setSaveError(true);
        }
    };

    return (
        <NewSessionCard
            exerciseSearchOptions={exerciseOptions}
            trainingHallNumbers={trainingHallNumbers}
            onCreate={handleCreate}
            errorMessage={
                saveError ? 'Your session was not created properly. Try again later.' : undefined
            }
        />
    );
}