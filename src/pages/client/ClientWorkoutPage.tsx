import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';
import { NewWorkoutCard, NewWorkoutData } from '../../components/cards/NewWorkoutCard';
import { Page } from '@/components/layout/Page';
import { ActionButton } from '@/components/common/ActionButton';
import { listExercises, listWorkoutSessions } from '@/generated/gym-api';
import type { ScheduleDateListElement } from '@/components/common/ScheduleViewer/ScheduleViewer';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export function ClientWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState<string[]>([]);
    const [workoutSessions, setWorkoutSessions] = useState<ScheduleDateListElement[]>([]);

    useEffect(() => {
        async function getExercises() {
            const exercisesData = (await listExercises()).data
                .filter(excersise => excersise !== undefined)
                .map(excersise => excersise.name)
                .filter(name => name !== undefined) as string[];

            setExerciseOptions(exercisesData);
        }

        async function getWorkoutSessions() {
            const sessions = (await listWorkoutSessions()).data;
            const mapped = sessions
                .filter(session => session.date)
                .map(session => ({
                    date: dayjs(session.date!),
                    title: session.title || 'Workout',
                    description: session.description || '',
                    action: session.uuid ? <ActionButton href={`/client/workout/${session.uuid}`}>Details</ActionButton> : undefined
                }));
            setWorkoutSessions(mapped);
        }

        getExercises();
        getWorkoutSessions();
    }, []);

    const newWorkoutData = {
        exerciseSearchOptions: exerciseOptions,
        onWorkoutSave: (data: NewWorkoutData) => {
            console.log(data);
        }
    };

    return (
        <Page>
            <SessionsCalendarCard title='Workout History' listElements={workoutSessions} />
            <NewWorkoutCard {...newWorkoutData} />
        </Page>
    );
}
