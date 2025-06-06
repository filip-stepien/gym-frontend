import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';
import { NewWorkoutCard, NewWorkoutData } from '../../components/cards/NewWorkoutCard';
import { Page } from '@/components/layout/Page';
import { ActionButton } from '@/components/common/ActionButton';
import { listExercises } from '@/generated/gym-api';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export function ClientWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState<string[]>([]);

    useEffect(() => {
        async function getExercises() {
            const exercisesData = (await listExercises()).data
                .filter(excersise => excersise !== undefined)
                .map(excersise => excersise.name)
                .filter(name => name !== undefined) as string[];

            setExerciseOptions(exercisesData);
        }

        getExercises();
    }, []);

    const sessionsCalendarCardData = {
        listElements: [
            {
                date: dayjs(),
                title: 'Workout 1',
                description: 'description',
                action: <ActionButton href='/client/workout/1'>Details</ActionButton>
            },
            {
                date: dayjs(),
                title: 'Workout 1',
                description: 'description',
                action: <ActionButton href='/client/workout/1'>Details</ActionButton>
            },
            {
                date: dayjs(),
                title: 'Workout 1',
                description: 'description',
                action: <ActionButton href='/client/workout/1'>Details</ActionButton>
            }
        ]
    };

    const newWorkoutData = {
        exerciseSearchOptions: exerciseOptions,
        onWorkoutSave: (data: NewWorkoutData) => {
            console.log(data);
        }
    };

    return (
        <Page>
            <SessionsCalendarCard title='Workout History' {...sessionsCalendarCardData} />
            <NewWorkoutCard {...newWorkoutData} />
        </Page>
    );
}
