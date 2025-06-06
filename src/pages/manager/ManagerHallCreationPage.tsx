import { BackButton } from '@/components/layout/BackButton';
import { HallCreationCard, HallValues } from '@/components/cards/HallCreationCard';
import { createHall, HallRequest, HallTypeDto, listHallTypes } from '@/generated/gym-api';
import { useEffect, useState } from 'react';

export function ManagerHallCreationPage() {
    const [hallTypes, setHallTypes] = useState<HallTypeDto[]>([]);

    const hallCreationCardData = {
        hallTypes,
        onCreate: (values: HallValues) => {
            const hallReq: HallRequest = {
                hallName: values.hallNumber,
                hallDescription: values.hallDescription,
                hallTypeUuid: values.hallType
            };

            // POST...
            console.log(hallReq);
            createHall(hallReq);
        }
    };

    useEffect(() => {
        async function getData() {
            setHallTypes((await listHallTypes()).data);
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
