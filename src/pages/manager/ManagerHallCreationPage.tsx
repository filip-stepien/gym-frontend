import { BackButton } from '@/components/layout/BackButton';
import { HallCreationCard, HallValues } from '@/components/cards/HallCreationCard';
import { listHallTypes } from '@/generated/gym-api';
import { useEffect, useState } from 'react';

export function ManagerHallCreationPage() {
    const [hallTypes, setHallTypes] = useState<string[]>([]);

    const hallCreationCardData = {
        hallTypes,
        onCreate: (values: HallValues) => {
            // POST...
            console.log(values);
        }
    };

    useEffect(() => {
        async function getData() {
            const hallTypesData = (await listHallTypes()).data
                .filter(hall => hall !== undefined)
                .map(hall => hall.name)
                .filter(name => name !== undefined);

            setHallTypes(hallTypesData);
        }

        getData();
    }, []);

    return (
        <div>
            <BackButton />
            <HallCreationCard {...hallCreationCardData} />
        </div>
    );
}
