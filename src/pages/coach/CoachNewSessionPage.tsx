import { NewSessionCard, type NewSessionValues } from '@/components/cards/NewSessionCard';

const newSessionCardData = {
    exerciseSearchOptions: ['Bench press', 'Pull up', 'Lateral raise'],
    trainingHallNumbers: ['1', '2', '3', '4'],
    onCreate: (values: NewSessionValues) => {
        // POST...
        console.log(values);
    }
};

export function CoachNewSessionPage() {
    return <NewSessionCard {...newSessionCardData} />;
}
