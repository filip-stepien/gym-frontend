import { HallsTableCard, HallsTableHall } from '@/components/cards/HallsTableCard';
import { HallDto, listHalls } from '@/generated/gym-api';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';
import { useEffect, useState } from 'react';

const role = getRoleFromUrl();

export function HallsPage() {
    const [halls, setHalls] = useState<HallsTableHall[]>([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await listHalls();
                const rawHalls = response.data.content ?? [];

                const transformedHalls: HallsTableHall[] = rawHalls.map((hall: HallDto) => ({
                    ...hall,
                    hallNumber: hall.hallName ?? 'None',
                    hallType: hall.hallType?.name ?? 'None',
                    hallStatus: 'Available',
                    detailsHref: `details/${hall.uuid ?? ''}`
                }));

                setHalls(transformedHalls);
            } catch (error) {
                console.error('Błąd podczas pobierania hal:', error);
                setHalls([]);
            }
        }

        getData();
    }, []);

    return <HallsTableCard halls={halls} newHallHref={`/${role}/create-hall`} />;
}
