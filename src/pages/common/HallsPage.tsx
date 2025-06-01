import { HallsTableCard } from '@/components/cards/HallsTableCard';

const hallsTableCardData = {
    halls: [
        {
            hallNumber: '1',
            hallType: 'Yoga',
            hallStatus: 'Available',
            detailsHref: '/employee/training-halls/1'
        },
        {
            hallNumber: '2',
            hallType: 'Weight lifting',
            hallStatus: 'Under Maintance',
            detailsHref: '/employee/training-halls/1'
        },
        {
            hallNumber: '3',
            hallType: 'Cardio',
            hallStatus: 'Busy',
            detailsHref: '/employee/training-halls/1'
        }
    ]
};

export function HallsPage() {
    return <HallsTableCard {...hallsTableCardData} />;
}
