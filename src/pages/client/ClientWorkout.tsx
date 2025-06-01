import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';
import { NewWorkoutCard, NewWorkoutData } from '../../components/cards/NewWorkoutCard';
import { Page } from '@/components/layout/Page';
import { ActionButton } from '@/components/common/ActionButton';
import dayjs from 'dayjs';

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
    exerciseSearchOptions: ['Bench press', 'Push up', 'Squat'],
    onWorkoutSave: (data: NewWorkoutData) => {
        // POST...
        console.log(data);
    }
};

export function ClientWorkout() {
    return (
        <Page>
            <SessionsCalendarCard title='Workout History' {...sessionsCalendarCardData} />
            <NewWorkoutCard {...newWorkoutData} />
        </Page>
    );
}
