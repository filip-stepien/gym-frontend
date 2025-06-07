import { HallsTableCard } from '@/components/cards/HallsTableCard';
import { listHalls } from '@/generated/gym-api';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';
import { useEffect, useState } from 'react';

// debug: get role from url
// get role from useUser hook in prod instead
const role = getRoleFromUrl();

const hallsTableCardData = {
    // only manager should be able to add the hall
    newHallHref: role === 'manager' ? `/${role}/create-hall` : undefined,
    halls: [
        {
            hallNumber: '1',
            hallType: 'Yoga',
            hallStatus: 'Available',
            detailsHref: `/${role}/training-halls/1`
        },
        {
            hallNumber: '2',
            hallType: 'Weight lifting',
            hallStatus: 'Under Maintance',
            detailsHref: `/${role}/training-halls/1`
        },
        {
            hallNumber: '3',
            hallType: 'Cardio',
            hallStatus: 'Busy',
            detailsHref: `/${role}/training-halls/1`
        }
    ]
};

export function HallsPage() {
    const [halls, setHalls] = useState(hallsTableCardData);

    // TODO make pagination work
    useEffect(() => {
        const doStuff = async () => {
            console.log((await listHalls()).data.content);
        };

        doStuff();
    });

    listHalls();
    return <HallsTableCard {...hallsTableCardData} />;
}
