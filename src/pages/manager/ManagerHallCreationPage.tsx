import { BackButton } from '@/components/layout/BackButton';
import { HallCreationCard, HallValues } from '@/components/cards/HallCreationCard';
import { createHall, HallRequest, HallTypeDto, listHallTypes } from '@/generated/gym-api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export function ManagerHallCreationPage() {
    const [hallTypes, setHallTypes] = useState<HallTypeDto[]>([]);
    const navigate = useNavigate();

    const hallCreationCardData = {
        hallTypes,
        onCreate: async (values: HallValues) => {
            const hallReq: HallRequest = {
                hallName: values.hallNumber,
                hallDescription: values.hallDescription,
                hallTypeUuid: values.hallType
            };

            try {
                await createHall(hallReq);
                navigate(-1);
            } catch (error) {
                console.error('Błąd przy tworzeniu hali:', error);
            }
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
