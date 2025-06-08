import { ActionButton } from '@/components/common/ActionButton';
import { WorkoutSessionDto, listWorkoutSessions } from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { SessionsCalendarCard } from '../SessionsCalendarCard';

export function PublicSessionsCalendarCardWithData() {
    const { user } = useUser();
    const [sessions, setSessions] = useState<WorkoutSessionDto[]>();
    useEffect(() => {
        async function getAllSessions() {
            if (!user?.id) return;
            const allSessions = (await listWorkoutSessions()).data.content;
            setSessions(allSessions);
        }

        getAllSessions();
    }, [user?.id]);

    return (
        <SessionsCalendarCard
            title='Public Sessions'
            listElements={sessions
                ?.filter(e => e.coach && e.hall)
                .map(e => ({
                    date: dayjs(e.date),
                    title: e.title,
                    description: e.description,
                    action: (
                        <ActionButton href={`/${user?.role}/workout/${e.uuid}`}>
                            Details
                        </ActionButton>
                    )
                }))}
            actions={[
                <ActionButton href={`/${user?.role}/sessions`}>Show My Sessions</ActionButton>
            ]}
        />
    );
}
