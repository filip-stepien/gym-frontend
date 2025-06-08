import { Flex } from 'antd';
import { Page } from '@/components/layout/Page';
import { MembershipStatusCard } from '@/components/cards/MembershipStatusCard';
import { ProgressOverviewCard } from '@/components/cards/ProgressOverviewCard';
import { SessionsCalendarCard } from '@/components/cards/SessionsCalendarCard';
import { LastSessionCard } from '@/components/cards/LastSessionCard';
import { ActionButton } from '@/components/common/ActionButton';
import dayjs from 'dayjs';
import { useUser } from '@/hooks/useUser';
import { useEffect, useState } from 'react';
import {
    createMembership,
    getPaymentURI,
    getUser,
    getUserLastWorkoutSession,
    getUserProgressOverview,
    listMembershipTypes,
    listWorkoutSessions,
    Membership,
    ProgressOverviewDto,
    updateUser,
    WorkoutSessionDto
} from '@/generated/gym-api';
import { AxiosError } from 'axios';

export function ClientDashboardPage() {
    const { user } = useUser();
    const [progressOverview, setProgressOverview] = useState<ProgressOverviewDto | null>(null);
    const [lastSession, setLastSession] = useState<WorkoutSessionDto | null>(null);
    const [membership, setMembership] = useState<Membership | null>(null);
    const [sessions, setSessions] = useState<WorkoutSessionDto[] | null>();

    const [progressLoading, setProgressLoading] = useState(false);
    const [renewalLoading, setRenewalLoading] = useState(false);
    const [lastSessionLoading, setLastSessionLoading] = useState(false);

    useEffect(() => {
        async function getMembershipStatus() {
            if (!user?.id) return;
            const userMembership = (await getUser(user.id)).data.membership;
            setMembership(userMembership ?? null);
        }

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

        async function getAllSessions() {
            if (!user?.id) return;
            const allSessions = (await listWorkoutSessions()).data.content;
            setSessions(allSessions);
        }

        getMembershipStatus();
        getProgressOverview();
        getLastSession();
        getAllSessions();
    }, [user?.id]);

    const handleRenewClick = async (membershipTypeName: string) => {
        setRenewalLoading(true);

        const createUserMembership = async (): Promise<string | null> => {
            if (!user?.id) return null;

            try {
                const { membership } = (await getUser(user.id)).data;

                if (membership?.uuid) return membership.uuid;

                const membershipTypes = (await listMembershipTypes()).data.content ?? [];
                const selectedType = membershipTypes.find(e => e.type === membershipTypeName);

                if (!selectedType?.uuid) return null;

                const newMembership = (
                    await createMembership({ membershipTypeUuid: selectedType.uuid })
                ).data;

                if (!newMembership?.uuid) return null;

                await updateUser(user.id, {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    membershipUuid: newMembership.uuid
                });

                return newMembership.uuid;
            } catch (e) {
                console.error(e);
                return null;
            }
        };

        const membershipId = (await createUserMembership()) as string;
        const paymentUri = (await getPaymentURI(membershipId)).data;

        if (paymentUri) {
            window.location.href = paymentUri;
        }

        setRenewalLoading(false);
    };

    return (
        <Page>
            <div className='bg-layout gap-small lg:gap-layout md:flex'>
                <Flex flex={1}>
                    <MembershipStatusCard
                        userId={user?.id}
                        onRenew={() => handleRenewClick('Standard')}
                        renewalLoading={renewalLoading}
                        renderRenewButton={dayjs(dayjs()).isAfter(membership?.validUntil)}
                        detailsHref='/client/membership'
                        lastPayment={membership?.validFrom}
                        validUntil={membership?.validUntil}
                    />
                </Flex>
                <Flex vertical className='gap-small lg:gap-layout pt-small w-full flex-2 md:pt-0'>
                    <ProgressOverviewCard
                        {...progressOverview}
                        isLoading={progressLoading}
                        isEmpty={!progressLoading && !progressOverview}
                    />
                    <LastSessionCard
                        isLoading={lastSessionLoading}
                        isEmpty={!lastSessionLoading && !lastSession}
                        date={lastSession?.date}
                        coach={lastSession?.coach?.firstName + ' ' + lastSession?.coach?.lastName}
                        totalSets={lastSession?.exercises?.length}
                        totalVolume={lastSession?.exercises
                            ?.map(({ reps, weight }) => (reps ?? 0) * (weight ?? 0))
                            .reduce((a, b) => a + b)}
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
                            <ActionButton href={'/client/workout/' + lastSession?.uuid}>
                                Show Details
                            </ActionButton>
                        ]}
                    />
                </Flex>
            </div>
            <SessionsCalendarCard
                title='All Sessions'
                listElements={sessions?.map(e => ({
                    date: dayjs(e.date),
                    title: e.title,
                    description: e.description,
                    action: <ActionButton href={'/client/workout/' + e.uuid}>Details</ActionButton>
                }))}
                actions={[<ActionButton href='/client/sessions'>Show My Sessions</ActionButton>]}
            />
        </Page>
    );
}
