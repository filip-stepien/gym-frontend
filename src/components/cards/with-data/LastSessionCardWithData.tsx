import { ActionButton } from '@/components/common/ActionButton';
import { getUserLastWorkoutSession, WorkoutSessionDto } from '@/generated/gym-api';
import { useUser } from '@/hooks/useUser';
import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { LastSessionCard } from '../LastSessionCard';

export function LastSessionCardWithData() {
    const { user } = useUser();
    const [lastSession, setLastSession] = useState<WorkoutSessionDto>();
    const [lastSessionLoading, setLastSessionLoading] = useState(false);

    useEffect(() => {
        async function getLastSession() {
            if (!user?.id) return;
            try {
                setLastSessionLoading(true);
                const session = (await getUserLastWorkoutSession(user.id)).data;
                setLastSession(session);
            } catch (e) {
                if ((e as AxiosError)?.response?.status === 404) {
                    // no data
                    return;
                }
            } finally {
                setLastSessionLoading(false);
            }
        }

        getLastSession();
    }, [user?.id]);

    return (
        <LastSessionCard
            isLoading={lastSessionLoading}
            isEmpty={!lastSessionLoading && !lastSession}
            date={lastSession?.date}
            coach={
                lastSession?.coach
                    ? lastSession?.coach?.firstName + ' ' + lastSession?.coach?.lastName
                    : undefined
            }
            totalSets={lastSession?.exercises?.length || undefined}
            totalVolume={lastSession?.exercises
                ?.map(({ reps, weight }) => (reps ?? 0) * (weight ?? 0))
                .reduce((a, b) => a + b, 0)}
            tags={[
                ...new Set(
                    lastSession?.exercises
                        ?.flatMap(e => e.exercise?.targetMuscles)
                        .map(e => e?.name ?? 'Unnamed muscle')
                )
            ]}
            exercises={lastSession?.exercises
                ?.sort((a, b) => (a.exerciseOrder ?? 0) - (b.exerciseOrder ?? 0))
                .map(e => e.exercise?.name ?? 'Unnamed exercise')}
            actions={[
                <ActionButton href={`/${user?.role}/workout/${lastSession?.uuid}`}>
                    Show Details
                </ActionButton>
            ]}
        />
    );
}
