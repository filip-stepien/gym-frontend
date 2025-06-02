import { BackButton } from '@/components/layout/BackButton';
import { HallCreationCard, HallValues } from '@/components/cards/HallCreationCard';

const hallCreationCardData = {
    hallTypes: ['Yoga', 'Weight lifting', 'Cardio'],
    onCreate: (values: HallValues) => {
        // POST...
        console.log(values);
    }
};

export function ManagerHallCreationPage() {
    return (
        <div>
            <BackButton />
            <HallCreationCard {...hallCreationCardData} />
        </div>
    );
}
