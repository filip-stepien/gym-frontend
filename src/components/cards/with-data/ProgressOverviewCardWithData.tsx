import { ProgressOverviewDto, getUserProgressOverview } from '@/generated/gym-api';
import { useState, useEffect } from 'react';
import { ProgressOverviewCard } from '../ProgressOverviewCard';
import { useUser } from '@/hooks/useUser';

export function ProgressOverviewCardWithData() {
    const { user } = useUser();
    const [progressOverview, setProgressOverview] = useState<ProgressOverviewDto>();
    const [progressLoading, setProgressLoading] = useState(false);

    useEffect(() => {
        async function getProgressOverview() {
            if (!user?.id) return;
            try {
                setProgressLoading(true);
                const progress = (await getUserProgressOverview(user.id)).data;
                setProgressOverview(progress);
            } finally {
                setProgressLoading(false);
            }
        }

        getProgressOverview();
    }, [user?.id]);

    return (
        <ProgressOverviewCard
            {...progressOverview}
            isLoading={progressLoading}
            isEmpty={!progressLoading && !progressOverview}
        />
    );
}
