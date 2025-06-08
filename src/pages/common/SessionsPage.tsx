import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';
import dayjs from 'dayjs';
import { ActionButton } from '@/components/common/ActionButton';
import { listUserWorkoutSessions, WorkoutSessionDto } from '@/generated/gym-api';
import { useEffect, useState } from 'react';
import { useUser } from '@/hooks/useUser';

export function SessionsPage() {
    const { user } = useUser();
    const [sessions, setSessions] = useState<WorkoutSessionDto[]>();

    useEffect(() => {
        async function getUserSessions() {
            if (!user?.id) return;
            const userSessions = (await listUserWorkoutSessions(user?.id)).data;
            setSessions(userSessions);
        }

        getUserSessions();
    }, [user?.id]);

    return (
        <SessionsCalendarCard
            title='Your Sessions'
            fullscreen
            listElements={sessions?.map(e => ({
                date: dayjs(e.date),
                title: e.title,
                description: e.description,
                action: (
                    <ActionButton href={`/${user?.role}/workout/${e.uuid}`}>Details</ActionButton>
                )
            }))}
        />
    );
}
